// 4. Write a program deepClone that takes an object as input and
// returns a deep copy of that object. The function should handle nested objects and arrays.


//using structured clone
//issue function copying issue
const person = {
  name: "mansahib",
  value: 10,
  nested: {
    data: [1, 2, 3],
    name2: "try",
  },
  myDate: new Date(),
};
const deepCopy = (obj) => {
  const deepCloned = structuredClone(obj);
  deepCloned.nested.data.push(120);
  deepCloned.nested.name2 = "singh";
  deepCloned.name = "sahib";
  console.log(deepCloned);
};

deepCopy(person);
console.log(person);



//using recursion
function deepCopyObject(obj){
  let newObj=obj.hasOwnProperty('length')?[]:{};
  for(let i in obj){
    if(typeof(obj[i])=="object"){
      newObj[i]=deepCopyObject(obj[i]);

    }else
    {
      newObj[i]=obj[i];
    }
  }
  return newObj;
}
let obj1={
  name:"mansahib",
  age:23,
  fn:function(){
    console.log("hi");
  },
  nested:{
    val:200,
    inner:{
      val1:24,
      val2:25
    }
  },
  arr:[1,10,3]
}

let obj2=deepCopyObject(obj1);
obj2.arr[0]=3;
obj1.age=14;
console.log(obj1);
console.log(obj2);