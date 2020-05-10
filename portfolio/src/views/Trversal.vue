<template>
    <b-container class="project" fluid="md" aligh-h="around">
        <b-row>
            <b-col cols order-md="1">
                <div class="center-col" ><h1>Trversal</h1></div>
            </b-col>
        </b-row>
        <b-row>
            <b-col md="8" order-md="3">
                <div class="center-col"><b-img class="headshot" fluid alt="Preview of Trversal" src="../assets/img/trversal-demo.gif"></b-img></div>
                
            </b-col>
            <b-col md="4" order-md="2">
                <div class="center-col"><h4>An itenerary building web application.</h4>
                <br>
                <p>This app dynamically interacts with Google Maps to calculate the most up to date travel times between your selected locations. Start a trip and add the points of interest you would like to see each day. The app will keep track of the time needed throughout the day to travel between each place so you can realistically see how much you can fit into your trip and stay on schedule!</p>
                <br>
                <p>This is my capstone from PDX Code Guild. It is very much in an MVP state. I have listed the future plans for this project on the Github README linked below.</p></div>
                </b-col>
        </b-row>
        <b-row>
            <b-col md="8" order-md="5">
                <div class="center-col">
                    <div><h3>Tech Stack:</h3></div>
                    <div> Python, Django, DjangoRest, Javascript, Vue, CSS/HTML</div>
                </div>
            </b-col>
            <b-col md="4" order-md="4">
                <div class="center-col">
                <a href="">View the Source Code on Github</a>
                    
                </div>
            </b-col>
        </b-row>       
    </b-container>
</template>

<script>
export default {
  title: "Tabatha's Trversal App"
}
</script>
<style scoped>
.project {
    text-align: center;
}
.center-col {
    width: 90%;
    margin-left: auto;
    margin-right: auto; 
    padding-bottom: 20px;   
}
</style>