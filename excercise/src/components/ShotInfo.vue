<template>
    <div>
        <v-card-title>
            <div>
                <h3>Shot Information</h3>
            </div>
        </v-card-title>
        <ul class="shot-info-list">
            <li><strong>Action Type:</strong> {{ shot.actionType }}</li>
            <li><strong>Time:</strong> {{ new Date(shot.clientTime).toLocaleTimeString() }}</li>
            <li><strong>Launch Angle:</strong> {{ shot.launchAngle }}</li>
            <li><strong>Carry Distance:</strong> {{ shot.carryDistance }}</li>
            <li><strong>Round Score:</strong> {{ shot.roundScore }}</li>
            <li><strong>Launch Back Spin:</strong> {{ shot.launchBackSpin }}</li>
            <li><strong>Aim Heading:</strong> {{ shot.aimHeading }}</li>
            <li><strong>Round Score With Handicap:</strong> {{ shot.roundScoreWithHandicap }}</li>
            <li><strong>Launch Ball Speed:</strong> {{ shot.launchBallSpeed + " mph"}}</li>
            <li><strong>Club Face Angle:</strong> {{ shot.clubFaceAngle }}</li>
            <li><strong>Ended in Hole?</strong> {{ shot.endedInHole }}</li>
            <li><strong>Launch Direction:</strong> {{ shot.launchDirection }}</li>
            <li><strong>Club Head Speed:</strong> {{ shot.clubHeadSpeed + " mph" }}</li>
            <li><strong>Mulligan?</strong> {{ shot.mulligan }}</li>
            <li><strong>Launch Side Spin:</strong> {{ shot.launchSideSpin }}</li>
            <li><strong>Club Path Angle:</strong> {{ shot.clubPathAngle }}</li>
            <li><strong>Club Type:</strong> {{ shot.clubTypeKey }}</li>
        </ul>
    </div>
</template>
  
  <script>
  export default {
    props: {
      shot: Object,
    },  
  };
  </script>
  <style scoped>
    .shot-info-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
        list-style: none;
    }
    .shot-info-list li {
        margin: 0;
    }
  </style>