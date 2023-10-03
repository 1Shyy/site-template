document.addEventListener('DOMContentLoaded', clickTabs());
                 
                function  clickTabs() {
                 
                    var tabs = document.querySelector('#tabs');
                    var item = document.querySelectorAll('.item');
                    var itemContent = document.querySelectorAll('.item-content');
                    
                   tabs.addEventListener("click", function (event) {
                 
                        if (event.target.classList == 'item'){
                            for ( let i = 0; i < item.length; i++ ){
                                item[i].classList.remove('active');
                                itemContent[i].classList.remove('active');
                            }
                        
                            event.target.classList.add('active');
                            let idItemContent = event.target.id + '-content';
                            let iC = document.getElementById(idItemContent);
                            iC.classList.add('active');
                        }
                    });
                }

                window.addEventListener('scroll', () => {
                    const verticalScrollPx = window.scrollY || window.pageYOffset;
                    const page = document.querySelector('.page');
                    let changeColor = document.querySelectorAll('.page');
                  
                    if (verticalScrollPx < 500) {
                      document.getElementById('page1').style.color = '#FF3E41';
                      document.getElementById('page2').style.color = '#7F8589';
                    } else if (verticalScrollPx > 700 && verticalScrollPx < 3000) {
                        document.getElementById('page3').style.color = '#7F8589';
                        document.getElementById('page2').style.color = '#FF3E41';
                        document.getElementById('page1').style.color = '#7F8589';
                    } else if (verticalScrollPx > 3800 && verticalScrollPx < 4800) {
                        document.getElementById('page1').style.color = '#7F8589';
                        document.getElementById('page4').style.color = '#7F8589';
                        document.getElementById('page3').style.color = '#FF3E41';
                        document.getElementById('page2').style.color = '#7F8589';
                    } else if (verticalScrollPx > 4800 && verticalScrollPx < 5750) {
                        document.getElementById('page1').style.color = '#7F8589';
                        document.getElementById('page5').style.color = '#7F8589';
                        document.getElementById('page4').style.color = '#FF3E41';
                        document.getElementById('page3').style.color = '#7F8589';
                    } else if (verticalScrollPx > 5750 && verticalScrollPx < 6400) {
                        document.getElementById('page1').style.color = '#7F8589';
                        document.getElementById('page6').style.color = '#7F8589';
                        document.getElementById('page5').style.color = '#FF3E41';
                        document.getElementById('page4').style.color = '#7F8589';
                    } else if (verticalScrollPx > 6400){
                        document.getElementById('page1').style.color = '#7F8589';
                        document.getElementById('page6').style.color = '#FF3E41';
                        document.getElementById('page5').style.color = '#7F8589';
                    }
                  });