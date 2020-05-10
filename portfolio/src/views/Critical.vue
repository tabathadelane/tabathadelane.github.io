<template>
    <b-container class="project" fluid="md" aligh-h="around">
        <b-row>
            <b-col cols order-md="1">
                <div class="center-col" ><h1>Critical Reactions</h1></div>
            </b-col>
        </b-row>
        <b-row>
            <b-col md="8" order-md="3">
                <div class="center-col"><b-img class="headshot" fluid alt="Preview of Trversal" src="../assets/img/crit-demo.gif"></b-img></div>
                
            </b-col>
            <b-col md="4" order-md="2">
                <div class="center-col"><h4>Designed to be like a marketing site for my D&D Party.</h4>
                <br>

                <p>The inspiration is somewhere close to what a Real Estate or Insurance agent may use to sell customers on their service. Get to know us, read about our previous trials, customer testimonials, and more! The internet is the next big magical phenomenon to come to Faerun!</p>      
                <br>        
                <p>I plan to add a blog section for my character (A bard,the story teller of the party.) to share her perspective while on the road. It is very much in an MVP state. I want to update the styling and deploy it to the world. There is much more info about this project and why I made the decisions I did in the Github README linked below.</p></div>
                </b-col>
        </b-row>
        <b-row>
            <b-col md="8" order-md="5">
                <div class="center-col">
                    <div><h3>Tech Stack:</h3></div>
                    <div>Django, DjangoRest, Javascript, Vue, CSS/HTML, Sass, Bootstrap</div>
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
  title: "Tabatha's CritcalReactions App"
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