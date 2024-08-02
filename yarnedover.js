document.getElementById('fetch-projects').addEventListener<'click',function(){ fetch('/api/random-projects')
    .then('response=>response.json'())
    .then(data=>{
    const container=document.getElementById('projects-container');
    {
            container.innerHTML=data.projects.map(project=>
                <div class="project">
                    <h3>${project.title}</h3>
                </div>
            ).join('');
    }
        .catch(error=>console.error('Error fetching projects:', error));
    };
        
        document.getElementById('donate-button').addEventListener('click', function(){
            const form=document.getElementById('donate-form');
            form.style.display=form.style.display==='none'? 'block': 'none';
        });
    
    document.getElementById('donation-form').addEventListener('submit', function(event){
        event.preventDefault();
        const name=document.getElementById('name').value;
        const amount=document.getElementById('amount').value;
        alert('Thank you, ${name}, for your donation of $${amount}!');
    
    });
    