//--------------------------REQUERIMENTOS--------------------------------------------------------------
//carrega a api do google (só precisa ser chamado uma vez por arquivo)
google.charts.load('current', {'packages':['corechart']});

// define o callback que carrega a  API do google.
google.charts.setOnLoadCallback(graficoREQ);

// chama a função
function graficoREQ() {

   // opções de tamanho, titulo e legendas.
   var options = {
  
    chartArea:{width:"85%",height:"70%"},
    };
 
   // escolhe o modelo do gáfico.
   var chart = new google.visualization.PieChart(document.getElementById('grafico_REQ-FEV20'));
 
   (async () => {
    let chartData;
    chartData = await fetch('http://www.mesquita.rj.gov.br/pmm/TESTE_redecom_NAO_USAR/arquivo.json')
      .then(response => {
      return response.json();
      })
      .then(jsonBody => {
           const json = jsonBody;
           return json;
      })

        // Criar tabela
       var data = google.visualization.arrayToDataTable([
          ['Element', 'secretarias', { role: 'style' }],
 
             // barras
            ['SEMGOV', chartData['fevereiro']['requerimentos'][0]['semgov'],'#ff0000'],
            ['SEMUS', chartData['fevereiro']['requerimentos'][0]['semus'], '#9d2424' ],
            ['SEMAS', chartData['fevereiro']['requerimentos'][0]['semas'],'#f5e70d'],
            ['SEMED', chartData['fevereiro']['requerimentos'][0]['semed'], '#ada746' ],
            ['SEMSOPC', chartData['fevereiro']['requerimentos'][0]['semsopc'],'#007eff'],
            ['SETRADE', chartData['fevereiro']['requerimentos'][0]['setrade'], '#1c2e9a' ],
            ['GABINETE', chartData['fevereiro']['requerimentos'][0]['gabineteDoPrefeito'],'#a588dc'],
            ['PROCON', chartData['fevereiro']['requerimentos'][0]['procon'], '#60409f' ],
            ['FORUM', chartData['fevereiro']['requerimentos'][0]['forum'], '#BFEB01' ],
            ['SEMCELT', chartData['fevereiro']['requerimentos'][0]['semcelt'], '#F5980A' ],
            ['SEMEF', chartData['fevereiro']['requerimentos'][0]['semef'],'#09DAEB'],
            ['SEMMURB', chartData['fevereiro']['requerimentos'][0]['semmurb'], '#08EB36' ],
            ['DEFESA CIVIL', chartData['fevereiro']['requerimentos'][0]['defesaCivil'], '#084A36' ]// título , valor, cor 
            //console.log(chartData['fevereiro']['requerimentos'][0])
         ]);      
 

         $(window).resize(function(){
            graficoREQ();
            
          });


      chart.draw(data, options);
  })();
 
 }
//--------------------------IMPRENSA--------------------------------------------------------------

 // define o callback que carrega a  API do google.
     google.charts.setOnLoadCallback(graficoI);

     function graficoI() {

      // opções de tamanho, titulo e legendas.
           var options = {
            legend: { position: 'none'},
            chartArea:{width:"85%",height:"70%"},
                        };
                          
    
           // escolhe o modelo do gáfico.
           var chart = new google.visualization.BarChart(document.getElementById('grafico_I-FEV20'));
    
           (async () => {
             let chartData;
             chartData = await fetch('http://www.mesquita.rj.gov.br/pmm/TESTE_redecom_NAO_USAR/arquivo.json')
               .then(response => {
               return response.json();
               })
               .then(jsonBody => {
                    const json = jsonBody;
                    return json;
               })
    
               // Criar tabela
             var data = google.visualization.arrayToDataTable([
             ['Produto', 'Imp',  { role: 'style' }],
     
                // barras
             ['CONTEÚDOS', chartData['fevereiro']['imprensa'][0]['conteudos'],'#ff0000'],
             ['CLIPPINGS', chartData['fevereiro']['imprensa'][0]['clipings'], '#9d2424' ] // título , valor, cor 
          ]);            
         
               chart.draw(data, options);
           })();
    }



//---------------------------------DESIGNER GRÁFICO------------------------------------------------
// define o callback que carrega a  API do google.
google.charts.setOnLoadCallback(graficoDG);

// chama a função
      function graficoDG() {

         // opções de tamanho, titulo e legendas.
     var options = {
      
      legend: { position: 'none'},
      chartArea:{width:"85%",height:"70%"},
                  };

        // escolhe o modelo do gáfico.
        var chart = new google.visualization.BarChart(document.getElementById('grafico_DG-FEV20'));

        (async () => {
         let chartData;
         chartData = await fetch('http://www.mesquita.rj.gov.br/pmm/TESTE_redecom_NAO_USAR/arquivo.json')
           .then(response => {
           return response.json();
           })
           .then(jsonBody => {
                const json = jsonBody;
                return json;
           })

           // Criar tabela
         var data = google.visualization.arrayToDataTable([
         ['Produto', 'Imp',  { role: 'style' }],
 
            // barras
         ['ARTES', chartData['fevereiro']['design'][0]['artes'],'#f5e70d'],
         ['IMPRESSÕES', chartData['fevereiro']['design'][0]['impressoes'], '#ada746' ] // título , valor, cor 
      ]);            
           chart.draw(data, options);
       })();

}


//-----------------------------FOTOGRAFIA E AUDIOVISUAL----------------------------------------------------------


google.charts.setOnLoadCallback(graficoFA);

// chama a função
      function graficoFA() {

         // opções de tamanho, titulo e legendas.
     var options = {
      legend: { position: 'none'},
      chartArea:{width:"85%",height:"70%"},
                  };

        // escolhe o modelo do gáfico.
        var chart = new google.visualization.BarChart(document.getElementById('grafico_FA-FEV20'));

        (async () => {
         let chartData;
         chartData = await fetch('http://www.mesquita.rj.gov.br/pmm/TESTE_redecom_NAO_USAR/arquivo.json')
           .then(response => {
           return response.json();
           })
           .then(jsonBody => {
                const json = jsonBody;
                return json;
           })

           // Criar tabela
         var data = google.visualization.arrayToDataTable([
         ['Produto', 'Imp',  { role: 'style' }],
 
            // barras
            ['COBERTURAS', chartData['fevereiro']['fotografia'][0]['cobertura'],'#007eff'],
            ['MATERIAL', chartData['fevereiro']['fotografia'][0]['material'], '#1c2e9a' ]  // título , valor, cor 
      ]);            
           chart.draw(data, options);
       })();

}

//--------------------------------MIDIA SOCIAL ------------------------------------------------

// define o callback que carrega a  API do google.
 google.charts.setOnLoadCallback(graficoMS);

// chama a função
 function graficoMS() {

  // opções de tamanho, titulo e legendas.
   var options = {
    legend: { position: 'none'},
    chartArea:{width:"85%",height:"70%"},
    vAxis: {
      title: '115 POSTS'
    },
    hAxis: {
      title: '*Principal rede social utilizada no Brasil'
    }
 };

   // escolhe o modelo do gáfico.
   var chart = new google.visualization.BarChart(document.getElementById('grafico_MS-FEV20'));

   (async () => {
      let chartData;
      chartData = await fetch('http://www.mesquita.rj.gov.br/pmm/TESTE_redecom_NAO_USAR/arquivo.json')
        .then(response => {
        return response.json();
        })
        .then(jsonBody => {
             const json = jsonBody;
             return json;
        })

           // Criar tabela
           var data = google.visualization.arrayToDataTable([
         ['Produto', 'MS', { role: 'style' }],
            // barras
            
         ['SEGUIDORES', chartData['fevereiro']['social'][0]['seguidores'] ,'#a588dc'],
         ['ALCANCE', chartData['fevereiro']['social'][0]['alcance'] , '#60409f' ] // título , valor, cor 
      ]);            
      chart.draw(data, options);
  })();

}
//---------------------------------------------------------------------------------------------------
