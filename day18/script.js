 let arr = ["Apple","banana","Orange","Kiwi"]
function searchFunction() {
  // جلب النص المدخل
  // نحصل على القيمة المدخلة في حقل البحث ونحولها إلى أحرف صغيرة لتجنب حساسية الأحرف
  let input = document.getElementById("searchInput").value.toLowerCase();
  let itemsList = document.getElementById("itemsList")
  let paper="";
  itemsList.innerHTML=""
console.log(typeof(input));

  // نستخدم حلقة للمرور على جميع العناصر <li> وفحص إذا كان النص المدخل موجود في العنصر أم لا
  for (let i = 0; i < arr.length; i++) {
    // عايزين نشوف user كتب اي  اقارنه array  وضيفه في li 
     if (input=== "" ){
       return
     }
     else{
      if (arr[i].toLowerCase().includes(input)){
        paper+= "<li>" +arr[i]+ "</li>"
         
         itemsList.innerHTML=paper
         
      } 
     }
  
  }
}
