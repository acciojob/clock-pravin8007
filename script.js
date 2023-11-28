//your JS code here. If required.
 function updateTimer() {
            var now = new Date();
            var date = now.toDateString();
            var time = now.toLocaleTimeString();
            var dateTimeString = date + ' ' + time;

            document.getElementById('timer').innerText = dateTimeString;
        }

        // Update the timer every second
        setInterval(updateTimer);

        // Initial update
        updateTimer();