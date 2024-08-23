
/*
طريقة السوابينج القيدمة والجديدة بتبدل القيم

  Destructuring
  - Destructuring Array => Swapping Variables
*/

// let book = "Video";
// let video = "Book";

// // Save Book Value In Stash
// let stash = book; // Video

// // Change Book Value
// book = video; // Book

// // Change Video Value
// video = stash; // Video

// [book, video] = [video, book];

// console.log(book);
// console.log(video);

////////////////////////////////////////////////////////////////////////////////////////////////////
/*
هنا انت بتعمل ديستراكشرينج للاوبجيكت بتبدل وتخزن قيم وتطبع بالطريقة القديمة والجديدة
متنساش انك لما تتعامل مع الاوبجيكت تستخدم {} مش القوسين بتوع الاراي [] ولو هتيجي تسكيب حاجة مش هتحتاج تسيبها فاضية 
 تشيل الاسم ع طول عشان انت جايبو بالاسم  
  Destructuring
  - Destructuring Object
*/

// const user = {
//     theName: "Osama",
//     theAge: 39,
//     theTitle: "Developer",
//     theCountry: "Egypt",
//   };
  
  // console.log(user.theName);
  // console.log(user.theAge);
  // console.log(user.theTitle);
  // console.log(user.theCountry);
  
  // let theName = user.theName;
  // let theAge = user.theAge;
  // let theTitle = user.theTitle;
  // let theCountry = user.theCountry;
  
  // console.log(theName);
  // console.log(theAge);
  // console.log(theTitle);
  // console.log(theCountry);

  // ({ theName, theAge, theTitle, theCountry } = user);

  // const { theName, theAge, theCountry } = user;
  
//   console.log(theName);
//   console.log(theAge);
//   console.log(theCountry);



/*
  Destructuring
  - Destructuring Object
  --- Naming The Variables
  --- Add New Property
  --- Nested Object
  --- Destructuring The Nested Object Only
*/
// const user = {
//     theName: "Osama",
//     theAge: 39,
//     theTitle: "Developer",
//     theCountry: "Egypt",
//     theColor: "Black",
//     skills: {
//       html: 70,
//       css: 80,
//     },
//   };
  
//   const {
//     theName: n,
//     theAge: a,
//     theCountry,
//     theColor: co = "Red",
//     skills: { html: h, css },
//   } = user;
//   console.log(n);
//   console.log(a);
//   console.log(theCountry);
//   console.log(co);
//   console.log(`My HTML Skill Progress Is ${h}`);
//   console.log(`My CSS Skill Progress Is ${css}`);
  
//   const { html: skillOne, css: skillTwo } = user.skills;
  
//   console.log(`My HTML Skill Progress Is ${skillOne}`);
//   console.log(`My CSS Skill Progress Is ${skillTwo}`);


/// بتعمل فانكشن بتطبعلك بيانات الاوبجيكت بس بالديستراكشرينج
/*
  Destructuring
  - Destructuring Function Parameters
*/
// فانكشن بتقبل بارميتر والبارميتر ده  اليوزر
// const user = {
//     theName: "Osama",
//     theAge: 39,
//     skills: {
//       html: 70,
//       css: 80,
//     },
//   };
  
//   showDetails(user);
  
  // function showDetails(obj) {
  //   console.log(`Your Name Is ${obj.theName}`);
  //   console.log(`Your Age Is ${obj.theAge}`);
  //   console.log(`Your CSS Skill Progress Is ${obj.skills.css}`);
  // }
  
//   function showDetails({ theName: n, theAge: a, skills: { css: c } } = user) {
//     console.log(`Your Name Is ${n}`);
//     console.log(`Your Age Is ${a}`);
//     console.log(`Your CSS Skill Progress Is ${c}`);
//   }

/*
  Destructuring
  - Destructuring Mixed Content
*/

// const user = {
//     theName: "Osama",
//     theAge: 39,
//     skills: ["HTML", "CSS", "JavaScript"],
//     addresses: {
//       egypt: "Cairo",
//       ksa: "Riyadh",
//     },
//   };
  
//   const {
//     theName: n,
//     theAge: a,
//     skills: [, , three],
//     addresses: { egypt: e },
//   } = user;
  
//   console.log(`Your Name Is: ${n}`);
//   console.log(`Your Age Is: ${a}`);
//   console.log(`Your Last Skill Is: ${three}`);
//   console.log(`Your Live In: ${e}`);
////////////////////////////////////////////////////////////////////////////////////////////////////

