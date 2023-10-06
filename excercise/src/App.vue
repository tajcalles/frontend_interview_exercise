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
    </v-app-bar>
    <v-main>

      <v-container>
        <v-card>
          <v-card-title>
            <div>
              <h2>{{ roundInfo.courseName }}</h2>
            </div>
          </v-card-title>
          <v-data-table
          :headers="headers"
          :items="shots"
          :loading = "isLoading"
          :items-per-page="15"
          class="elevation-1"
          loading-text="Loading... Please wait"
          :expanded.sync="expanded"
          :item-key="shots.id"
          show-expand
          >
          <template v-slot:top>
            <!-- <v-toolbar flat>
              <v-spacer></v-spacer>
              <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
              ></v-text-field>
            </v-toolbar> -->
          </template>
          <template v-slot:expanded-item="{ headers, item }">
            <td :colspan="headers.length">
              More info about shot # {{ item.shotIndex }}
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
    }

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
        this.roundInfo = this.roundData
        this.isLoading = false;
      })
      .catch((error) => {
        console.error('Error loading data:', error);
        this.isLoading = false;
      });
      console.log(this.roundInfo)
  },
};
</script>

<style></style>
