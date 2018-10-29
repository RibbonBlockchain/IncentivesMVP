<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
        <section class="section section-skew mt--150">
            <div class="container mt--300">
                
                <card shadow class="card-profile" no-body>
                <div class="text-center mt-5">
                            <h2>Ribbon Blockchain Ecosystem Statistics
                            </h2>
                            <div class="h6 font-weight-300"><i class="ni location_pin mr-2"></i>Visualize high level information on the status of the Ribbon ecosystem</div>
                    
                        </div>
                    <div class="px-4">
                       
                        <div class="row pt-5">
                            <div class="col">
                        <div class="text-center">
                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <h3>Ecosystem Donation Distribution
                            </h3>
                            <div class="h6 font-weight-300"><i class="ni location_pin mr-2"></i>See what Sponsors contributed to each project</div>
                                <vue-plotly :data="HorizontalBar.data" :layout="HorizontalBar.layout" :options="options" :autoResize="true" style="padding-left:50px; padding-top:0px"/>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                        <div class="row">
                            <div class="col">
                            
                        <div class="text-center mt-5">
                            <h3>Program Adoption Over time
                            </h3>
                            <div class="h6 font-weight-300"><i class="ni location_pin mr-2"></i>Visualize The number of users within each application for the Ribbon ecosystem</div>
                    
                        </div>
                        <div class="text-center">
                            <div class="row justify-content-center">
                                <div class="col-12">
                                    
                                <vue-plotly :data="programAdoption.data" :layout="programAdoption.layout" :options="options" :autoResize="true"/>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
    </div>
</template>
<script>
import VuePlotly from "@statnett/vue-plotly";

export default {
  components: {
    VuePlotly
  },
  data() {
    return {
      options: {
        responsive: true,
        showLink: false,
        displayModeBar: false
      }
    };
  },
  computed: {
    HorizontalBar() {
      return {
        data: [
          {
            x: [1000000, 750000, 200000, 1500000],
            y: ["Lola", "Mom Connect", "B-Wise", "Phila"],
            name: "Department Of health",
            orientation: "h",
            marker: {
              color: "rgba(55,128,191,0.6)",
              width: 1
            },
            type: "bar"
          },
          {
            x: [1400000, 950000, 300000, 1200000],
            y: ["Lola", "Mom Connect", "B-Wise", "Phila"],
            name: "CSI Budgets",
            orientation: "h",
            type: "bar",
            marker: {
              color: "rgba(255,153,51,0.6)",
              width: 1
            }
          },
          {
            x: [600000, 320000, 123321, 1928101],
            y: ["Lola", "Mom Connect", "B-Wise", "Phila"],
            name: "Donations",
            orientation: "h",
            type: "bar",
            marker: {
              color: "rgba(50,171, 96, 0.7)",
              width: 1
            }
          },
          {
            x: [600000, 320000, 3903321, 1928101],
            y: ["Lola", "Mom Connect", "B-Wise", "Phila"],
            name: "Treasury",
            orientation: "h",
            type: "bar",
            marker: {
              color: "rgba(20,50, 96, 0.7)",
              width: 1
            }
          }
        ],

        layout: {
          barmode: "stack",
          height: 400,
          width: 900,
          autosize: false,
          margin: {
            autoexpand: false,
            l: 100,
            r: 20,
            t: 0,
            pad: 0
          }
        },
        options: {
          responsive: true,
          showLink: false,
          displayModeBar: false
        }
      };
    },
    programAdoption() {
      var xData = [
        [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10"
        ],
        [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10"
        ],
        [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10"
        ],
        [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10"
        ]
      ];

      var yData = [
        [65, 82, 80, 120, 180, 300, 320, 350, 400, 350],
        [32, 42, 50, 46, 80, 120, 180, 200, 180, 220],
        [150, 200, 220, 240, 200, 150, 100, 200, 350, 410],
        [200, 250, 300, 320, 450, 450, 480, 520, 550, 600]
      ];

      var colors = ["#B0F566", "#5CC9F5", "#6638F0", "#F78AE0"];

      var lineSize = [3, 3, 3, 3];

      var labels = ["Phila", "B-Wise", "Mom Connect", "Lola"];

      var data = [];

      for (var i = 0; i < xData.length; i++) {
        var result = {
          x: xData[i],
          y: yData[i],
          type: "scatter",
          mode: "lines",
          line: {
            color: colors[i],
            width: lineSize[i]
          }
        };
        var result2 = {
          x: [xData[i][0], xData[i][9]],
          y: [yData[i][0], yData[i][9]],
          type: "scatter",
          mode: "markers",
          marker: {
            color: colors[i],
            size: 12
          }
        };
        data.push(result, result2);
      }

      var layout = {
          height: 400,
          width:900,
  showlegend: false,
  xaxis: {
    showline: true,
    showgrid: true,
    showticklabels: true,
    linecolor: 'rgb(204,204,204)',
    linewidth: 2,
    autotick: false,
    ticks: 'outside',
    tickcolor: 'rgb(204,204,204)',
    tickwidth: 2,
    ticklen: 5,
    tickfont: {
      family: 'Arial',
      size: 12,
      color: 'rgb(82, 82, 82)'
    }
  },
  yaxis: {
    showgrid: true,
    zeroline: false,
    showline: false,
    showticklabels: false
  },
  autosize: false,
  margin: {
    autoexpand: false,
    l: 100,
    r: 20,
    t: 0
  },
  annotations: [
    // {
    //   xref: 'paper',
    //   yref: 'paper',
    //   x: 0.0,
    //   y: 1.05,
    //   xanchor: 'left',
    //   yanchor: 'bottom',
    // //   text: 'Main Source for News',
    // //   font:{
    // //     family: 'Arial',
    // //     size: 30,
    // //     color: 'rgb(37,37,37)'
    // //   },
    //   showarrow: false
    // },
    {
      xref: 'paper',
      yref: 'paper',
      x: 0.5,
      y: -0.1,
      xanchor: 'center',
      yanchor: 'top',
      text: 'Date (months)',
      showarrow: false,
      font: {
        family: 'Arial',
        size: 12,
        color: 'rgb(150,150,150)'
      }
    }
  ]
};

for ( var i = 0 ; i < xData.length ; i ++ ) {
  var result = {
    xref: 'paper',
    x: 0.05,
    y: yData[i][0],
    xanchor: 'right',
    yanchor: 'middle',
    text: labels[i] + ' ' + yData[i][0],
    showarrow: false,
    font: {
      family: 'Arial',
      size: 16,
      color: 'black'
    }
  };
  var result2 = {
    xref: 'paper',
    x: 0.95,
    y: yData[i][9],
    xanchor: 'left',
    yanchor: 'middle',
    text: yData[i][9],
    font: {
      family: 'Arial',
      size: 16,
      color: 'black'
    },
    showarrow: false
  };
  
  layout.annotations.push(result, result2);
}
      return { data: data, layout: layout };
    }
  }
};
</script>
<style>
</style>
