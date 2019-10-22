var TestingPage = function() {
	var EC = protractor.ExpectedConditions;
  this.searchBox = element(by.id('search_query_top'));
  this.submitEle=element(by.xpath("//button[@name='submit_search']"));
  this.resultList=element(by.xpath("//div[@class='product-container']//../a[@class='product_img_link']"));
  this.ItemsNameList="//div[@class='product-container']//../a[@class='product-name']";
  this.selectEle=element(by.xpath('//select[@id="selectProductSort"]'));
  this.listItem=element(by.xpath("(//div[@class='product-container']//../a[@class='product_img_link'])[1]"));
  this.ItemEle=element(by.xpath("(//div[@class='product-container']//../a[@title='Add to cart'])[1]"));
  this.productAdded=element(by.xpath("(//div[@id='layer_cart']//../h2)[1]"));
  this.closeWindow=element(by.xpath("//div[@id='layer_cart']//../span[@title='Close window']"));
  this.quantity=element(by.xpath("//div[@class='shopping_cart']//../a/span[contains(@class,'ajax_cart_quantity')]"));
  this.checkoutEle=element(by.xpath("//div[@class='shopping_cart']//../a[contains(@id,'button_order_cart')]"));
  this.orderHistoryPageEle=element(by.xpath("//h1[@id='cart_title']"));
  this.proceedtocheckoutEle=element(by.xpath("(//a[contains(@title,'Proceed to checkout')])[2]"));
  this.emailEle=element(by.xpath("//input[@id='email_create']"));
  this.createbutton=element(by.xpath("//button[@id='SubmitCreate']"));
  this.errorEle=element(by.xpath("//div[@id='create_account_error']"));
  
};

module.exports = TestingPage;