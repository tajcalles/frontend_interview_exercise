<template>
  <v-app>
    <v-container>
      <v-card>
        <v-card-title>
          <div>
            <h2>Scorecard</h2>
          </div>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="shots"
          :loading = "isLoading"
          :items-per-page="15"
          class="elevation-1"
          loading-text="Loading... Please wait"
        ></v-data-table>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters('shots', ['shotList']),
  },
  methods: {
    ...mapActions('shots', ['allShots']),

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
  },
};
</script>

<style></style>
