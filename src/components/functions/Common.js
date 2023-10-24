
  
var Common = {
    truncateString : (string) => {

        var data = string.slice(0, 300);

        if(string.length > 300) {
            data = data.concat('...');
        }

        return data;
    }
}


export default Common;