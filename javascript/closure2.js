var a;
function async() {
  a = 20;
  var myFunc = () => {
    console.log("fsfsf", a);
  };
  setTimeout(myFunc, 1000);

  console.dir(myFunc);
}
async();
a = 30;