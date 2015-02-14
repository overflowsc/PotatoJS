

var IS_WINDOWS_APP = typeof WINDOWS_APP != "undefined";

if (IS_WINDOWS_APP)
{
    potatoAlert = function(message)
    {
        var popup = new Windows.UI.Popups.MessageDialog(message);
        popup.showAsync();
    }
}
else
{
    potatoAlert = function (message)
    {
        alert(message);
    }
}

