/*class flash.events.SecurityErrorEvent*/
(function ()
{
	"use strict";
	
	var d = {};
	
	
	/*public*/
	d.SecurityErrorEvent = function (type/*String*/, bubbles/*Boolean*/, cancelable/*Boolean*/, text/*String*/)
	{
		if (bubbles == undefined) bubbles = false;
		if (cancelable == undefined) cancelable = false;
		if (text == undefined) text = "";
		
		this.ErrorEvent_constructor(type, bubbles, cancelable, text);
		return;
		
	};
	
	/*override*/
	/*public*/
	d.clone = function ()/*Event*/
	{
		return new flash.events.SecurityErrorEvent(this.get_type(), this.get_bubbles(), this.get_cancelable(), this.get_text());
		
	};
	
	/*override*/
	/*public*/
	d.toString = function ()/*String*/
	{
		return this.formatToString("SecurityErrorEvent", "type", "bubbles", "cancelable", "eventPhase", "text");
		
	};
	
	
	var s = {};
	
	s.__init__ = function ()
	{
		/*super*/
		/*public*/
		this.prototype.ErrorEvent_constructor = this.__base__;
		
		/*public*/
		this/*const*/.SECURITY_ERROR/*String*/ = "securityError";
		
	};
	
	
	flash.addDescription("flash.events.SecurityErrorEvent", d, "flash.events.ErrorEvent", s, null);
	
}
());
