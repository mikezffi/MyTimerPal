export default function TimerFormatter(input) {
   input = Number(input);
   // let h = Math.floor(d / 3600);
   let m = Math.floor(input % 3600 / 60);
   let s = Math.floor(input % 3600 % 60);

   // let hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
   let mDisplay = m >= 0 ? (m < 10 ? "0" + m : m) + ":" : ""
   let sDisplay = s >= 0 ? (s < 10 ? "0" + s : s) : ""

   return mDisplay + sDisplay; 
 }