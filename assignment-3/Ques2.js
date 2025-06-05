/*
. Write a program to display following output as shown in figure


1
2 3
4 5 6
7 8 9 10


1
2 2
3 3 3
4 4 4 4



1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5

*/


const pattern1=()=>{
    let n=1;
    for(let i=0;i<4;i++)
    {    let value = "";
        for(let j=0;j<=i;j++)
        {
            value+=n;
            n++;
        }
        console.log(value);
    }

}

const pattern2=()=>{

    for(let i=0;i<4;i++)
    {    let value = "";
        for(let j=0;j<=i;j++)
        {
            value+=i+1;
            
        }
        console.log(value);
    }

}

let lines=5
const pattern3=()=>{

    for(let i=0;i<5*2-1;i++)
    {    let value = "";
        for(let j=1;j<=lines;j++)
        {
            value+=j;
            
        }

        console.log(value);
        if(i<4)
        {
            lines--;
        }
        else
        {
            lines++;
        }
    }

}
pattern1();
pattern2();
console.log("");
pattern3();


