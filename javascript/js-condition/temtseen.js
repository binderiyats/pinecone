//#1 (Average of team A)
let teamA = [96,108, 89]; 
let teamASum = 0;
for(let i = 0; i < teamA.length; i++){
    teamASum +=teamA[i];
}
console.log(teamASum);
const avgTeamA = teamASum / teamA.length;
console.log(Math.round(avgTeamA));
//(Average of team B)
teamB = [88,91,110];
let teamBSum = 0;
for(let i = 0; i < teamB.length; i++){
    teamBSum +=teamB[i];
}
console.log(teamBSum);
const avgTeamB = teamBSum / teamB.length;
console.log(Math.round(avgTeamB));

if(avgTeamA > avgTeamB){
    console.log('Team A won')
}else if(avgTeamA < avgTeamB){
    console.log('Team B won')
}else{
    console.log('Both won')
}