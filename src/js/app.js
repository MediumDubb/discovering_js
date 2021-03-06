// alert("connected");
function orderTheArray() {
    const element1 = document.querySelector('#sorting-unordered');
    const element2 = document.querySelector('#sorting-ordered');
    const array_unordered0 = [3,5,1,2,9,4,7,6,10,8];
    const array_unordered1 = [3,5,1,2,9,4,7,6,10,8];
    const array_ordered = array_unordered1.sort((a, b) => a - b);
    
    for(let i = 0; i<array_unordered0.length; i++){
        element1.innerHTML += `${array_unordered0[i].toString()} `;
    }

    for(let i = 0; i<array_ordered.length; i++){
        element2.innerHTML += `${array_ordered[i].toString()} `;
    }
}

function ExportCSV() {
    const csv_downloadbtn = document.querySelector(".csv-file");
    const file_name = document.querySelector("#file_name");

    csv_downloadbtn.innerHTML = "Click for CSV"

    // alert("layer1")
    var stockData = [
        {
            Symbol: "AAPL",
            Company: "Apple Inc.",
            Price: 132.54
        },
        {
            Symbol: "INTC",
            Company: "Intel Corporation",
            Price: 33.45
        },
        {
            Symbol: "GOOG",
            Company: "Google Inc",
            Price: 554.52
        },
    ];

        function convertArrayOfObjectsToCSV(args) {
            alert("conver obj to csv format");
            var result, ctr, keys, columnDelimiter, lineDelimiter, data;
            
            data = args.data || null;
            if (data == null || !data.length) {
            return null;
            }
            
            columnDelimiter = args.columnDelimiter || ',';
            lineDelimiter = args.lineDelimiter || '\n';
            
            keys = Object.keys(data[0]);
            
            result = '';
            result += keys.join(columnDelimiter);
            result += lineDelimiter;
            
            data.forEach(function(item) {
            ctr = 0;
            keys.forEach(function(key) {
            if (ctr > 0) result += columnDelimiter;
            
            result += item[key];
            ctr++;
            });
            result += lineDelimiter;
            });

            return result;
        }
        csv_downloadbtn.addEventListener("click", e => {

            const result = convertArrayOfObjectsToCSV(stockData);

            function downloadCSV(args) {
                alert("prepare for csv export");
                var data, filename, link;
                var csv = convertArrayOfObjectsToCSV({
                data: stockData
                });
                if (csv == null) return;
                
                filename = file_name.value || 'export.csv';
                
                if (!csv.match(/^data:text\/csv/i)) {
                csv = 'data:text/csv;charset=utf-8,' + csv;
                }
                data = encodeURI(csv);
                
                link = document.createElement('a');
                link.setAttribute('href', data);
                link.setAttribute('download', filename); 
                link.click();
            }
    
            downloadCSV(result);
        });  
            
}

orderTheArray()
ExportCSV()
