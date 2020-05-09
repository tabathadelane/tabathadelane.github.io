<template>
    <b-container class="project" fluid="md" aligh-h="around">
        <b-row>
            <b-col cols order-md="1">
                <div class="center-col" ><h1>Habit@</h1></div>
            </b-col>
        </b-row>
        <b-row>
            <b-col md="8" order-md="3">
                <div class="center-col"><b-img class="headshot" fluid alt="Preview of Trversal" src="../assets/img/trversal-screenshot-tripview-googlesearch-sm.jpg"></b-img></div>
                
            </b-col>
            <b-col md="4" order-md="2">
                <div class="center-col">This is where I will type a bunch of info about each project. This will be a nice size paragraph that summarizes what the application does. I might mention why I decided to make it, and why I chose certain technologies. If there is too much say, mention that it is expained on the Github README. What problem does this project aim to solve? What did you learn about or attempt to learn about from this project?</div>
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
  title: "Tabatha's Habit@ App"
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