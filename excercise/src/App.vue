<template>
  <v-app>
    <v-app-bar app color="darkWhite">
      <v-toolbar-title>
        <v-img
          lazy-src="/trugolf_logo.png"
          max-height=""
          max-width="225"
          src="/trugolf_logo.png"
        ></v-img>
      </v-toolbar-title>
      <v-divider
        class="mx-4"
        vertical
      ></v-divider>
      <v-toolbar-title>
        <h3>Scorecard</h3>
      </v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-card>
          <v-card-title>
            <div>
              <h3>{{ roundInfo.courseName + " " + new Date(this.shots[0].createdAt).toLocaleDateString()}}</h3>
            </div>
          </v-card-title>
          <v-tabs color="green">
            <v-tab
              href="#tab-1"
              ripple>
              Data Table
            </v-tab>
            <v-tab 
              href="#tab-2"
              ripple>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <span
                    v-bind="attrs"
                    v-on="on"
                  >Trajectory 3D Model</span>
                </template>
                <span>Coming soon!</span>
              </v-tooltip>
            </v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab">
            <v-tab-item
              v-for="i in 2"
              :key="i"
              :value="'tab-' + i"
            >
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              {{ tab }}
            </v-card>
          </v-tab-item>
        </v-tabs-items>
        <v-data-table
          :headers="headers"
          :items="shots"
          :loading = "isLoading"
          :items-per-page="15"
          class="elevation-1"
          loading-text="Loading... Please wait"
          :expanded.sync="expanded"
          :item-key="shots.id"
          show-expand>
          <template v-slot:expanded-item="{ headers, item }">
            <td :colspan="headers.length">
              <ShotInfo :shot="item" />
            </td>
          </template>
        </v-data-table>
      </v-card>
    </v-container>
  </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ShotInfo from './components/ShotInfo.vue';
import Sidebar from './components/Sidebar.vue';
export default {
  computed: {
    ...mapGetters('shots', ['shotList']),
    ...mapGetters('roundData', ['roundData']),
  },
  methods: {
    ...mapActions('shots', ['allShots']),
    ...mapActions('roundData', ['getRoundData']),

    modifyShotData() {
      this.shots.forEach(shot => {
        shot.courseHoleIndex = shot.courseHoleIndex + 1;
        shot.shotIndex = shot.shotIndex + 1;
        shot.totalDistance = shot.totalDistance / 3;
        shot.totalDistance = shot.totalDistance.toFixed(2);;
        shot.carryDistance = shot.carryDistance / 3;
        shot.carryDistance = shot.carryDistance.toFixed(2);
        shot.launchBallSpeed = shot.launchBallSpeed.toFixed(2);
        shot.launchBackSpin = shot.launchBackSpin.toFixed(2);
        shot.launchAngle = shot.launchAngle.toFixed(2);
      });
    },

  },
  data() {
    return {
      headers: [
        { text: 'Hole', value: 'courseHoleIndex' },
        { text: 'Shot', value: 'shotIndex' },
        { text: 'Club Type', value: 'clubTypeKey' },
        { text: 'Distance (yds)', value: 'totalDistance' },
        { text: 'Carry (yds)', value: 'carryDistance' },
        { text: 'Ball Speed (rpm)', value: 'launchBallSpeed' },
        { text: 'Back Spin (rpm)', value: 'launchBackSpin' },
        { text: 'Launch Angle °', value: 'launchAngle' }
      ],
      shotData: {},
      shots: [],
      roundInfo: {},
      expanded: [],
      isLoading: true,
      tab: null,
    }
  },
  mounted () {
    this.allShots()
      .then(() => {
        this.shots = this.shotList;
        this.modifyShotData();
        this.isLoading = false;
      })
      .catch((error) => {
        console.error('Error loading data:', error);
        this.isLoading = false;
      });
    this.getRoundData()
      .then(() => {
        this.roundInfo = this.roundData;
        this.isLoading = false;
      })
      .catch((error) => {
        console.error('Error loading data:', error);
        this.isLoading = false;
      });
  },
};
</script>

<style></style>
