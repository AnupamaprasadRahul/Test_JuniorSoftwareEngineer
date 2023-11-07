QUESTION:

Create a simple PHP page (index.php) that displays the current date and time, formatted
as “Day, Month DD, YYYY HH:MM:SS AM/PM”. Make sure to set the appropriate timezone.
      *---------------------------------------------------------------*

-> Installed XAMPP 8.2.4 for the php programming (php 8.2.4). In the program files, select xampp-control-exe file and open in Run as Administrator inorder to start Apache and MySQL.
->Then open a new folder(folder_name) inside 'htdocs' folder and open a new file - 'index.php' and start doing code using visual studio code editor.

->Inorder to set the appropriate timezone, I used 'date_default_timezone_set'function and provided with the location - Europe/Malta.
->For getting the dates, used date()function.
->For displaying date, use->  date('d') function.
->For displaying day, use->  date('l') function.
->For displaying month, use->  date('M') function.
->For displaying year, use->  date('Y') function.
->For displaying time in HH:MM:SS AM/PM, use->  date('h:i:s a') function. Here, h-> Hour, i-> Minute, s-> seconds and a-> AM/PM

->we can see the output- localhost/folder_name