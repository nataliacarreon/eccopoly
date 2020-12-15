let instances = [];
instances.push(basicScroll.create({
  elem: document.querySelector('#enc1'),
    
  from: 'middle-middle',
    
  to: 'top-top',

    props: {
        '--color': {
          
          from: '100%',
          
          to: '0%'
      },
  }
}));
instances.push(basicScroll.create({
elem: document.querySelector('#enc2'),
    
  from: 'middle-middle',
    
  to: 'top-top',

    props: {
        '--color2': {
          
          from: '100%',
          
          to: '0%'
      },
  }
}));
instances.push(basicScroll.create({
  elem: document.querySelector('#enc3'),
      
    from: 'middle-middle',
      
    to: 'top-top',
  
      props: {
          '--color3': {
            
            from: '100%',
            
            to: '0%'
        },

    }
  }));

instances.forEach((instance) => {
  instance.start();
});

window.onresize = function() {
  instances.forEach((instance) => {
    instance.calculate()
    instance.update()
  });
}
