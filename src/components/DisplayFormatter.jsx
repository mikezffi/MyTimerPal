export default function DisplayFormatter(input) {
   input = input
   let nums = Array.from(input.split(''),Number);

   var s1 = 0
   var s2 = 0
   var m1 = 0
   var m2 = 0

   switch (nums.length) {
      case 1:
         var s1 = 0
         var s2 = nums[0]
         var m1 = 0
         var m2 = 0
         break;
         
      case 2:
         var s1 = nums[0]
         var s2 = nums[1]
         var m1 = 0
         var m2 = 0
         break;
   
      case 3:
         var s1 = nums[1]
         var s2 = nums[2]
         var m1 = 0
         var m2 = nums[0]
         break;
      case 4:
         var s1 = nums[2]
         var s2 = nums[3]
         var m1 = nums[0]
         var m2 = nums[1]
         break;

      default:
         break;
   }

   let mDisplay = m1 + "" + m2
   let sDisplay = s1 + "" + s2

   return { mDisplay, sDisplay }
}