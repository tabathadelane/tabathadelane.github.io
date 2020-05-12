<template>
    <b-container class="project" fluid="md" aligh-h="around">
        <b-row>
            <b-col cols order-md="1">
                <div class="center-col" ><h1>Habit@</h1></div>
            </b-col>
        </b-row>
        <b-row>
            <b-col md="8" order-md="3">
                <div class="center-col"><b-img class="headshot" fluid alt="Preview of Trversal" src="../assets/img/habitat-demo.gif"></b-img></div>
                
            </b-col>
            <b-col md="4" order-md="2">
                <div class="center-col">
                    <h4>A habit tracking application</h4>
                    <p>This project was built during a 1-day AWS Hackathon on a team of 5. I contributed by writing the python Lambda functions and assisting with CSS styling and logo design. </p>
                    <br>
                    <p>“Habitat” was created with the purpose to help users start good habits by keeping streaks. The goal was to use AWS to keep track of the streaks. If a user entered that they did their task that day, the Lambda would update the streak count in the database. Cloudwatch Events checked the time twice each day. In the evening, if the user hadn’t completed their task, it would trigger an SNS warning. At midnight, if they hadn't done it, it would erase the streak! </p></div>
                </b-col>
        </b-row>
        <b-row>
            <b-col md="8" order-md="5">
                <div class="center-col">
                    <div><h3>Tech Stack:</h3></div>
                    <div>Python, AWS Lambda, DynamoDB, HTML, CSS, Javascript, React.js</div>
                </div>
            </b-col>
            <b-col md="4" order-md="4">
                <div class="center-col">
                <a href="https://github.com/tobyfee/habitat">View the Source Code on Github</a>
                    
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