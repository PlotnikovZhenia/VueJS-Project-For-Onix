navbar.onclick = function(event) {
      if (event.target.tagName != "A") return;

      if (event.ctrlKey || event.metaKey) {
        toggleSelect(event.target);
      } else {
        singleSelect(event.target);
      }

    }

    navbar.onmousedown = function() {
      return false;
    };

    function toggleSelect(a) {
      a.classList.toggle('navbar-active');
    }

    function singleSelect(a) {
      let selected = navbar.querySelectorAll('.navbar-active');
      for(let elem of selected) {
        elem.classList.remove('navbar-active');
      }
      a.classList.add('navbar-active');
    }
    function OpenWindowTask() {
      let messeage=document.createElement('div');
      messeage.className="WindowTasksOpen";
      messeage.innerHTML="<h2>Are you sure you want to change the number of tasks ?</h2><div><p onclick='CompletedWindowTask()'>Yes</p><p onclick='CloseWindowTask()'>No</p></div>";
      document.body.append(messeage);
    }
    function CompletedWindowTask() {
      let elemOfComplete=document.getElementById('resultCompletedTasks');
      let elemOfOpenTasks=document.getElementById('resultOpenTasks');
      let messeage=document.querySelector('.WindowTasksOpen')
      messeage.className="";
      if(elemOfOpenTasks.innerHTML>0){
        elemOfOpenTasks.innerHTML=elemOfOpenTasks.innerHTML-1;
        elemOfComplete.innerHTML++;
      };
    }

    function CloseWindowTask() {
      let messeage=document.querySelector('.WindowTasksOpen')
      messeage.className="";
    }
    //array of images-notification
    function indexOfImage(src) {
      let array_images=['Symbol12.jpg', 'Symbol13.jpg','Symbol14.jpg','Symbol15.jpg'];
      for(let i=0; i<array_images.length;i++) {
        if(src.endsWith(array_images[i])){
          notificationIndex.innerHTML=i+1;
        }
      }
    }


