function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getRandomChinese =  async(length) => {

    try{
        let result = '';
        let i = 0;

        while (i<length){
            i++;
            result += String.fromCharCode(parseInt(Date.now().toString().slice(-5)));
            await timeout(50);
        }

        return console.log(result);
    }
    catch(err){
        console.log(err);
    }
}
getRandomChinese(5);
