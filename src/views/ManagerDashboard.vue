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
        <section class="section section-skew mt--100">
            <div class="container">
                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-4">
                        <div class="row justify-content-center pb-3">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    <a href="#">
                                        <img v-lazy="'img/managers/reaction.png'" class="rounded-circle">
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center pr-1">
                                <div class="card-profile-stats d-flex justify-content-center">
                                    <div class="row">
                                        <div class="col-12">
                                        <span class="heading">Funding Health</span>
                                    <vue-plotly class="heading" :data="gaugeData.data" :layout="gaugeData.layout" :options="options" :autoResize="true" style="padding-top:0px;padding-left:0px"/>
                                    
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-1">
                                <div class="card-profile-stats d-flex justify-content-center">
                                    <div>
                                        <span class="heading">She Conquers - Lola</span>
                            <span class="description">Daily active users: <strong>28</strong></span><br>
                            <span class="description">Total historic users: <strong>1945</strong></span><br>
                            <span class="description">Starting date: <strong>2018-07-24</strong></span><br>
                            <span class="description">Manager address: <strong>0x90E1...33A0</strong></span>
                                    </div>
    
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-5 mt--150">
                            <h3>Re-Action!
                                
                            </h3>
                            <div class="h6 font-weight-300"><i class="ni location_pin mr-2"></i>South Africa</div>
                        

                        </div>
                         <div class="mt-3  text-center">
                            <div class="row justify-content-center">
                             <div class="nav-wrapper">
            <tabs fill class="flex-md-row col-12 ">
                <card shadow slot-scope="{activeTabIndex}">
                    <tab-pane key="tab1">
                        <template slot="title">
                            <i class="fa fa-user-md"></i> Practitioners and Programs
                        </template>
                           <table class="table table-striped" style="width:800px">
                            <thead>
                            <tr>
                                <th>Practitioner Name</th>
                                <th>Last Active</th>
                                <th>Total Awarded</th>
                                <th>Edit</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Lola API Gauteng</td>
                                <td>2018-10-28</td>
                                
                                <td>3759 RBN</td> 
                                <td>
                                    <button class="btn btn-icon btn-2 btn-secondary" type="button" @click="modals.practitioner = true">
	                                    <span class="btn-inner--icon"><i class="fa fa-pencil"></i></span>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>Lola Gauteng Community Kiosks</td>
                                <td>2018-10-28</td>
                                
                                <td>3759 RBN</td> 
                                <td>
                                    <button class="btn btn-icon btn-2 btn-secondary" type="button" @click="modals.practitioner = true">
	                                    <span class="btn-inner--icon"><i class="fa fa-pencil"></i></span>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>Lola API Mpumalanga</td>
                                <td>2018-10-28</td>
                                
                                <td>3759 RBN</td> 
                                <td>
                                    <button class="btn btn-icon btn-2 btn-secondary" type="button" @click="modals.practitioner = true">
	                                    <span class="btn-inner--icon"><i class="fa fa-pencil"></i></span>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>Lola Mpumalanga Community Kiosks</td>
                                <td>2018-10-28</td>
                                
                                <td>3759 RBN</td> 
                                <td>
                                    <button class="btn btn-icon btn-2 btn-secondary" type="button" @click="modals.practitioner = true">
	                                    <span class="btn-inner--icon"><i class="fa fa-pencil"></i></span>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>Lola API Free State</td>
                                <td>2018-10-28</td>
                                
                                <td>3759 RBN</td> 
                                <td>
                                    <button class="btn btn-icon btn-2 btn-secondary" type="button" @click="modals.practitioner = true">
	                                    <span class="btn-inner--icon"><i class="fa fa-pencil"></i></span>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>Lola Free State Community Kiosks</td>
                                <td>2018-10-28</td>
                                
                                <td>3759 RBN</td> 
                                <td>
                                    <button class="btn btn-icon btn-2 btn-secondary" type="button" @click="modals.practitioner = true">
	                                    <span class="btn-inner--icon"><i class="fa fa-pencil"></i></span>
                                    </button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </tab-pane>

                    <tab-pane key="tab2">
                        <template slot="title">
                            <i class="fa fa-user"></i> Users
                        </template>

                        <div class="row">
                            <div class="col-12" style="width:100%">
                                 <table class="table table-striped" style="width:800px">
                            <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Address</th>
                                <th>Last Active</th>
                                <th>Balance</th>
                                <th>remove</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Ezra</td>
                                <td>Munro</td>
                                <td>0x90E1...33A0</td>    
                                <td>2018-10-28</td>
                                <td>75 RBN</td>
                                <td>
                                    <button class="btn btn-icon btn-2 btn-warning" type="button">
                                        <span class="btn-inner--icon p-0 m-0"><i class="fa fa-trash"></i></span>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>Robin</td>
                                <td>Olson</td>
                                <td>0x72A2...44B1</td>    
                                <td>2018-10-29</td>
                                <td>120 RBN</td>
                                <td>
                                    <button class="btn btn-icon btn-2 btn-warning" type="button">
                                        <span class="btn-inner--icon p-0 m-0"><i class="fa fa-trash"></i></span>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>Herbert</td>
                                <td>Singleton</td>
                                <td>0x10F2...28C5</td>    
                                <td>2018-10-25</td>
                                <td>15 RBN</td>
                                <td>
                                    <button class="btn btn-icon btn-2 btn-warning" type="button">
                                        <span class="btn-inner--icon p-0 m-0"><i class="fa fa-trash"></i></span>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>Harry</td>
                                <td>Short</td>
                                <td>0x12E5...55C4</td>    
                                <td>2018-10-11</td>
                                <td>295 RBN</td>
                                <td>
                                    <button class="btn btn-icon btn-2 btn-warning" type="button">
                                        <span class="btn-inner--icon p-0 m-0"><i class="fa fa-trash"></i></span>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>Amar</td>
                                <td>Hogan</td>
                                <td>0x12Cd...28C2</td>    
                                <td>2018-10-23</td>
                                <td>193 RBN</td>
                                <td>
                                    <button class="btn btn-icon btn-2 btn-warning" type="button">
                                        <span class="btn-inner--icon p-0 m-0"><i class="fa fa-trash"></i></span>
                                    </button>
                                </td>
                            </tr>
                            
                            
                            </tbody>
                        </table>
                        <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-end">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">
        <i class="fa fa-angle-left"></i>
        <span class="sr-only">Previous</span>
      </a>
    </li>
    <li class="page-item active"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">
        <i class="fa fa-angle-right"></i>
        <span class="sr-only">Next</span>
      </a>
    </li>
  </ul>
</nav>
                        </div>
                    </div>




                                            </tab-pane>
              <tab-pane key="tab3">
                        <template slot="title">
                            <i class="fa fa-cogs"></i> Advanced
                        </template>
                           <div class="row  p-3 m-3" style="width:800px">
                        <div class="col-4">
                            <base-button type="secondary" class="mr-4" @click="advancedFunction">Transfer Management</base-button>
                        </div>
                        <div class="col-4">
                            <base-button type="secondary" class="mr-4" @click="advancedFunction">Change Program Name</base-button>
                        </div>
                        <div class="col-4">
                            <base-button type="warning" class="mr-4" @click="advancedFunction">Delete Program</base-button>
                           </div>
                           </div>
                        
                        
                    </tab-pane>
                                    </card>
                                </tabs> 
                            </div>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
    <!-- Deposit Window -->
    <modal :show.sync="modals.practitioner">
    <h4 slot="header" class="modal-title" id="modal-title-default">Lola Program API</h4>
        <div class="row">
            <div class="col-12 text-center">
                <p>This practitioner represent the wallet used to send RBN tokens for the main application API. Any interaction with the app that results in token distribution will go through this API.</p>
            </div>
            </div>
                    
             <table class="table">
                            <thead>
                            <!-- <tr>
                                <th>Program</th>
                                <th>Donation Date</th>
                                <th>Amount</th>
                            </tr> -->
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Total Tokens Awarded</td>
                                    <td>123891.19 RBN</td>   
                                </tr>
                                <tr>
                                    <td>Remaining Allowance</td>
                                    <td>{{programAllowance}} RBN</td>   
                                </tr>
                                <tr>
                                    <td>People awarded</td>
                                    <td>553</td>   
                                </tr>
                                <tr>
                                    <td>Date Created</td>
                                    <td>2018-10-05</td>   
                                </tr>
                                <tr>
                                    <td>Last active</td>
                                    <td>2018-10-28</td>   
                                </tr>
                            </tbody>
                        </table>
                        <hr>
                        <div class="row">
            <div class="col-5 text-center">
            Modify Allowance: 
            </div>
            
            <div class="col-7 text-center">
                <button class="btn btn-icon btn-3 btn-primary btn-sm" type="button" @click="modifyAllowance(5000)">
                <span class="btn-inner--icon"><i class="fa fa-arrow-up"></i></span>
                <span class="btn-inner--text">Increase</span>
            </button>
            <button class="btn btn-icon btn-3 btn-primary btn-sm" type="button" @click="modifyAllowance(-5000)">
                <span class="btn-inner--icon"><i class="fa fa-arrow-down"></i></span>
                <span class="btn-inner--text">Decrease</span>
            </button>
            
            </div>
            </div>

            <div class="row pt-3">
            <div class="col-7">
                <base-slider :range={min:0,max:100000} v-model="programAllowance"/><br>
            </div>
            <div class="col-5">
                <input type="number" v-model="programAllowance">
            </div>
        </div>
        <template slot="footer">
                    <base-button :disabled="programAllowance==originalAllowance" type="primary">Save</base-button>
                    <base-button type="link" class="ml-auto" @click="modals.practitioner = false">Cancel</base-button>
        </template>
    </modal>
    </div>
</template>
<script>
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";
import Modal from "@/components/Modal.vue";
import BaseDropdown from "@/components/BaseDropdown";
import VuePlotly from "@statnett/vue-plotly";
export default {
  components: {
    Tabs,
    TabPane,
    Modal,
    BaseDropdown,
    VuePlotly
  },
  data() {
    return {
      modals: {
        practitioner: false
      },
      originalAllowance: 0,
      programAllowance: 3759.32,
      options: {
        responsive: true,
        showLink: false,
        displayModeBar: false
      }
    };
  },
  methods: {
    modifyAllowance(change) {
      let oldValue = parseFloat(this.programAllowance);

      this.programAllowance = oldValue + change;
    },
    advancedFunction() {
      this.$notify({
        group: "foo",
        title: "This not yet enabled on the front end",
        text:
          "In the future, you will be able to do some advanced stuff here..."
      });
    }
  },
  mounted() {
    this.originalAllowance = this.programAllowance;
  },
  computed: {
    gaugeData() {
      // Enter a balance between 0 and 180
      var level = 55;

      // Trig to calc meter point
      var degrees = 180 - level,
        radius = 0.5;
      var radians = (degrees * Math.PI) / 180;
      var x = radius * Math.cos(radians);
      var y = radius * Math.sin(radians);

      // Path: may have to change to create a better triangle
      var mainPath = "M -.0 -0.025 L .0 0.025 L ",
        pathX = String(x),
        space = " ",
        pathY = String(y),
        pathEnd = " Z";
      var path = mainPath.concat(pathX, space, pathY, pathEnd);

      var data = [
        {
          type: "scatter",
          x: [0],
          y: [0],
          marker: { size: 28, color: "850000" },
          showlegend: false,
          name: "balance",
          text: "3759",
          hoverinfo: "text+name"
        },
        {
          values: [50 / 6, 50 / 6, 50 / 6, 50 / 6, 50 / 6, 50 / 6, 50],
          rotation: 90,
          text: ["10000", "8000", "6000", "4000", "2000", "0", ""],
          textinfo: "text",
          textposition: "inside",
          marker: {
            colors: [
              "#6CFF6A",
              "#A3FE6A",
              "#DBFE67",
              "#FEE766",
              "#FEAB64",
              "#FE6F63",
              "#FFFFFF"
            ]
          },
          labels: [
            "Over 10000",
            "8000 to 9999",
            "6000 to 7999",
            "4000-5999",
            "2000-3999",
            "0-1999",
            ""
          ],
          hoverinfo: "label",
          hole: 0.5,
          type: "pie",
          showlegend: false
        }
      ];

      var layout = {
        shapes: [
          {
            type: "path",
            path: path,
            fillcolor: "850000",
            line: {
              color: "850000"
            }
          }
        ],
        // title: "Funding Health",
        height: 180,
        width: 180,
        margin: {
          l: 0,
          r: 0,
          b: 0,
          t: 0,
          pad: 0
        },
        xaxis: {
          zeroline: false,
          showticklabels: false,
          showgrid: false,
          range: [-1, 1]
        },
        yaxis: {
          zeroline: false,
          showticklabels: false,
          showgrid: false,
          range: [-1, 1]
        }
      };
      return { data: data, layout: layout };
    }
  }
};
</script>
<style>
</style>
