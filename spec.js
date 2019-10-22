var testingPage = require('./dummyPage');


describe('Store Website Check', function() {
	beforeEach(function () {
		browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
		browser.driver.get('http://automationpractice.com');  
     });
	 	
		
 it('should search and validate resultset', function() {
	var EC = protractor.ExpectedConditions;	 
	var page = new testingPage();	
	  page.searchBox.sendKeys('Printed').then(function(){
		 page.submitEle.click().then(function(){
			 console.log("Search Button Clicked");
			 browser.wait(EC.visibilityOf(page.resultList), browser.getPageTimeout).then(function(){
				 element.all(by.xpath(page.ItemsNameList)).then(function(items){
					if(items.length!=0){
						for(var i=0;i<items.length;i++){
						   items[i].getText().then(function(val){
							   console.log("Actual item name:--- "+val);
							   expect(val).toContain("Printed");
						   });
						}
					}
				 });
			 }); 
		 });
	 });
 });
 
 it('should sort and validate resultset in Ascending Order', function() {
	var EC = protractor.ExpectedConditions;	 
    var page = new testingPage();
	 var optionSelect;
	  var chararray=[];
	  page.searchBox.sendKeys('Dress').then(function(){
		 page.submitEle.click().then(function(){
			 console.log("Search Button Clicked");
			 browser.wait(EC.visibilityOf(page.resultList), browser.getPageTimeout).then(function(){
				 page.selectEle.click().then(function(){
						 page.selectEle.all(by.tagName('option')).then(function(options) {
							options[3].click().then(function(){
								console.log("sorting option clicked");
								var pattern1=/^[a-zA-Z]/;
								element.all(by.xpath(page.ItemsNameList)).then(function(items){
									if(items.length!=0){
										for(var i=0;i<items.length;i++){
										   items[i].getText().then(function(val){
											   console.log("Actual item name:--- "+val);
											   var result= val.match(pattern1);
											   chararray.push(result);
										   });
										}
									}
								}).then(function(){
									for( var i=0;i<chararray.length;i++){
										if(i==0 && chararray[i]<chararray[i+1]){
											console.log("chararray[i]--"+chararray[i]+" and chararray[i+1]--"+chararray[i+1]);
										}else if(i!=0 && chararray[i]<chararray[i+1] && chararray[i]>chararray[i-1]){
											console.log("chararray[i-1]--"+chararray[i-1] + " and chararray[i]--"+chararray[i]+" and chararray[i+1]--"+chararray[i+1]);
										}									
									}
								});
							});
							
						});
				 });
			 }); 
		 });
	 });  
  });
  
  it('should Add to cart and validate Quantity', function() {
	 var EC = protractor.ExpectedConditions;	 
    var page = new testingPage();
	 var optionSelect;
	  var chararray=[];
	  page.searchBox.sendKeys('Dress').then(function(){
		 page.submitEle.click().then(function(){
			 console.log("Search Button Clicked");
			 browser.wait(EC.visibilityOf(page.resultList), browser.getPageTimeout).then(function(){
				      browser.actions().mouseMove(page.listItem).perform();
										   page.ItemEle.click().then(function(val){
											   browser.wait(EC.visibilityOf(page.productAdded), browser.getPageTimeout).then(function(){
												   page.productAdded.getText().then(function(val){
													   expect(val).toContain("Product successfully added to your shopping cart");
													   console.log("Product added with message---"+val);
												   }).then(function(){
													    page.closeWindow.click().then(function(){
														    browser.wait(EC.visibilityOf(page.quantity), browser.getPageTimeout).then(function(){
																browser.actions().mouseMove(page.quantity).perform();
															    page.quantity.getText().then(function(text){
																   console.log("quantity added---"+text);
																   expect(text).toEqual("1");
															   });
															});
													   });
												   });
											  });
										   });
							
			 }); 
		 });
	 });  
  });
  
   it('Negative Scenario to validate if user does not provide Email then error message should get displayed', function() {
	  var EC = protractor.ExpectedConditions;	 
    var page = new testingPage();
	  var optionSelect;
	  var chararray=[];
	  var emailVal;
	  page.searchBox.sendKeys('Dress').then(function(){
		 page.submitEle.click().then(function(){
			 console.log("Search Button Clicked");
			 browser.wait(EC.visibilityOf(page.resultList), browser.getPageTimeout).then(function(){
				      browser.actions().mouseMove(page.listItem).perform();
										   page.ItemEle.click().then(function(val){
											   browser.wait(EC.visibilityOf(page.productAdded), browser.getPageTimeout).then(function(){
												   page.productAdded.getText().then(function(val){
													   expect(val).toContain("Product successfully added to your shopping cart");
													   console.log("Product added with message---"+val);
												   }).then(function(){
													    page.closeWindow.click().then(function(){
														    browser.wait(EC.visibilityOf(page.quantity), browser.getPageTimeout).then(function(){
																browser.actions().mouseMove(page.quantity).perform();
															    page.quantity.getText().then(function(text){
																   console.log("quantity added---"+text);
																   expect(text).toEqual("1");
															   });
															}).then(function(){
																   browser.wait(EC.visibilityOf(page.checkoutEle), browser.getPageTimeout).then(function(){
																	   page.checkoutEle.click().then(function(){
																		   browser.wait(EC.visibilityOf(page.orderHistoryPageEle), browser.getPageTimeout).then(function(){
																				page.proceedtocheckoutEle.click().then(function(){
																					browser.wait(EC.visibilityOf(page.emailEle), browser.getPageTimeout).then(function(){
																						 emailVal="";
																						 page.emailEle.clear().then(function(){
																							page.emailEle.sendKeys(emailVal).then(function(){
																								console.log("Provided empty string in text box");																								
																								page.createbutton.click().then(function(){
																									browser.wait(EC.visibilityOf(page.errorEle), browser.getPageTimeout).then(function(){
																										var errorEleLi=page.errorEle.element(by.tagName("li"));
																										errorEleLi.getText().then(function(error){
																											console.log("error message displayed--"+error);
																											expect(error).toEqual("Invalid email address.");
																										});
																									});
																								});
																							});
																						});
																					});
																				});
																		   });
																	   });
																	});
															   });
													   });
												   });
											  });
										   });
							
			 }); 
		 });
	 });  
  });
});
