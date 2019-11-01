// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function topicTab(data){
    //Create Element
    const tab = document.createElement('div');
    //Add Classes to Element
    tab.classList.add('tab');

    //Add Content
    tab.textContent = data;

    return tab;
}

const topics = document.querySelector('.topics');

axios
    .get('https://lambda-times-backend.herokuapp.com/topics')
    .then(res => {
        //console.log(res.data.topics);
        res.data.topics.forEach( item => {
            const newTopic = item;
            //console.log(newTopic);
            topics.appendChild(topicTab(newTopic))
        })
    })  
    // .catch(error => {
    //     console.log(`The data threw an error: ${error}`);
    // })