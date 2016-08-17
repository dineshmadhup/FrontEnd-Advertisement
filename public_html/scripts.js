/* 
    Created on : Feb 15, 2015, 11:29:00 AM
    Author     : Dinesh
*/

        var begin;
        var countdown;
        var count = 14;
        var curImage = 1;
        function beginAdPage() {
            begin = setInterval("changeAd()", 5000);
            countdown = setInterval("beginCountdown()", 1000);
        }
        function changeAd() {
            switch (curImage) {
                case 1:
                    document.imagesAd.src = "images/sushi22.jpg";
                    curImage = 2;
                    break;
                case 2:
                    document.imagesAd.src = "images/sushi33.jpg";
                    curImage = 3;
                    break;
                default:
                    document.imagesAd.src = "images/sushi11.jpg";
                    curImage = 1;
                    break;
            }

        }
        function beginCountdown() {
            document.homework2Form.timeLeft.value = count;
            count--;
            if (count == 0) {
                clearInterval(countdown);
                clearInterval(begin);
                location.href = "ABC2.html";
            }
        }
        
       



