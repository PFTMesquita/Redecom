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
   var chart = new google.visualization.PieChart(document.getElementById('grafico_REQ-JAN20'));
 
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
            ['SEMGOV', chartData['janeiro']['requerimentos'][0]['semgov'],'#ff0000'],
            ['SEMUS', chartData['janeiro']['requerimentos'][0]['semus'], '#9d2424' ],
            ['SEMAS', chartData['janeiro']['requerimentos'][0]['semas'],'#f5e70d'],
            ['SEMED', chartData['janeiro']['requerimentos'][0]['semed'], '#ada746' ],
            ['SEMSOPC', chartData['janeiro']['requerimentos'][0]['semsopc'],'#007eff'],
            ['SETRADE', chartData['janeiro']['requerimentos'][0]['setrade'], '#1c2e9a' ],
            ['GABINETE', chartData['janeiro']['requerimentos'][0]['gabineteDoPrefeito'],'#a588dc'],
            ['PROCON', chartData['janeiro']['requerimentos'][0]['procon'], '#60409f' ],
            ['FORUM', chartData['janeiro']['requerimentos'][0]['forum'], '#BFEB01' ],
            ['SEMCELT', chartData['janeiro']['requerimentos'][0]['semcelt'], '#F5980A' ],
            ['SEMEF', chartData['janeiro']['requerimentos'][0]['semef'],'#09DAEB'],
            ['SEMMURB', chartData['janeiro']['requerimentos'][0]['semmurb'], '#08EB36' ],
            ['DEFESA CIVIL', chartData['janeiro']['requerimentos'][0]['defesaCivil'], '#084A36' ]// título , valor, cor 
            //console.log(chartData['janeiro']['requerimentos'][0])
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
           var chart = new google.visualization.BarChart(document.getElementById('grafico_I-JAN20'));
    
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
             ['CONTEÚDOS', chartData['janeiro']['imprensa'][0]['conteudos'],'#ff0000'],
             ['CLIPPINGS', chartData['janeiro']['imprensa'][0]['clipings'], '#9d2424' ] // título , valor, cor 
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
        var chart = new google.visualization.BarChart(document.getElementById('grafico_DG-JAN20'));

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
         ['ARTES', chartData['janeiro']['design'][0]['artes'],'#f5e70d'],
         ['IMPRESSÕES', chartData['janeiro']['design'][0]['impressoes'], '#ada746' ] // título , valor, cor 
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
        var chart = new google.visualization.BarChart(document.getElementById('grafico_FA-JAN20'));

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
            ['COBERTURAS', chartData['janeiro']['fotografia'][0]['cobertura'],'#007eff'],
            ['MATERIAL', chartData['janeiro']['fotografia'][0]['material'], '#1c2e9a' ]  // título , valor, cor 
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
   var chart = new google.visualization.BarChart(document.getElementById('grafico_MS-JAN20'));

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
            
         ['SEGUIDORES', chartData['janeiro']['social'][0]['seguidores'] ,'#a588dc'],
         ['ALCANCE', chartData['janeiro']['social'][0]['alcance'] , '#60409f' ] // título , valor, cor 
      ]);            
      chart.draw(data, options);
  })();

}
//---------------------------------------------------------------------------------------------------
