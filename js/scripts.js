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