    function showForm() {
        var selopt = document.getElementById("opts").value;
        if (selopt == 1) {
            document.getElementById("f1").style.display = "block";
            document.getElementById("f2").style.display = "none";
        }
        if (selopt == 2) {
            document.getElementById("f2").style.display = "block";
            document.getElementById("f1").style.display = "none";
        }
        if (selopt == 0) {
            document.getElementById("f2").style.display = "none";
            document.getElementById("f1").style.display = "none";
        }
    }

    function placeholder() {
        var roomnum = document.getElementById("room-num").value;
        if (roomnum == 1) {
            window.open('giedt1001.html', '_blank');
        } 
        else if (roomnum == 2) {
            window.open('giedt1002.html', '_blank');
        }
        else if (roomnum == 3) {
            window.open('giedt1003.html', '_blank');
        }
    }
