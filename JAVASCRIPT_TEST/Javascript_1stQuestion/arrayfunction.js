const array=[1,4,7,8,3,9,2];
const targetNum=11;

const result=findNumber(array,targetNum);

console.log(result);


                    function findNumber(array,targetNum)
                    {
                        for(let i=0;i<array.length;i++)
                        {
                            for(let j=i+1;j<array.length;j++)
                            {
                                if(array[i]+array[j]===targetNum)
                                {
                                    return[array[i],array[j]];
                                }
                            }
                        }
                        return []; 

                    }



