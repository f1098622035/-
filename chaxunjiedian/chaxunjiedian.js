// pages/chaxunjiedian/chaxunjiedian.js

var chanpinTop="";
var qiyeTop = "";
var changyongTop = "";
var list=[];

Page({

  /**
   * 页面的初始数据
   */
	data: {
    list: ["list0", "list1", "list2", "list3"],
    toView: '',
    height:0,
    chooseDate:0
  },
  onLoad:function(){
    console.log(wx.getSystemInfoSync().windowHeight)  // 获取当前窗口的高度
    var mHeight = wx.getSystemInfoSync().windowHeight;
    var scorllHeight = mHeight-55;
    console.log(scorllHeight);
      this.setData({
        height: scorllHeight + 'px'
      })
    var query = wx.createSelectorQuery();
    query.select('#list0').boundingClientRect(res => {
      console.log(res)
      list.push(res.top)
    })
    query.select('#list1').boundingClientRect(res => {
      console.log(res)
      list.push(res.top)
    })
    query.select('#list2').boundingClientRect(res => {
      console.log(res)
      list.push(res.top)
    })
    query.select('#list3').boundingClientRect(res => {
      console.log(res)
      list.push(res.top)
      console.log(list)
    }).exec()

  },

  bijiao:function(){

  },
clickScroll:function(e){
    var id = e.currentTarget.dataset.id
    this.setData({
      toView:id
    })
    console.log(e.currentTarget.dataset);
  },
	scroll:function(e) {
    console.log(e)
  },
	upper(e) {
    var itemTop = e.detail.scrollTop+55
    this.changColor(itemTop)
  },
  changColor:function(e){
    console.log("函数中了的"+e)
    switch (true) {
      case e >list[0]  && e<=list[1]:
      console.log("00000000");
        this.setData({
          chooseDate:0
        })
        break;
      case e > list[1] && e <=list[2]:
        this.setData({
          chooseDate: 1
        })
        break;
      case e > list[2] && e <= list[3]:
        this.setData({
          chooseDate: 2
        })
        break;
      case list[3] < e:
        this.setData({
          chooseDate: 3
        })
        break;
      default:
        console.log("44444444444")
        break;
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})