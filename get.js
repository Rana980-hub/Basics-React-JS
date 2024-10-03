export default async function Get(value)
{
    let save = await fetch('https://jsonplaceholder.typicode.com/' + value)
    if(!save.ok)
    {
      throw new Error(save.statusText);
    }
    let data = await save.json(); 
    console.log(data);
    return data;           
}