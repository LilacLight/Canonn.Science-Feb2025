/**
 * Elite Dangerous Star Map
 * @link https://www.edsm.net/
 */

if(!window.edsmEmbed)
{
    window.edsmEmbed = { tasks: 0 };
    
    var script          = document.createElement("script");
        script.type     = "text/javascript",
        script.async    = !0,
        script.src      = "https://www.edsm.net/js/embed-controller.js",
        script.charset  = "utf-8",
        document.getElementsByTagName("head")[0].appendChild(script);
}
window.edsmEmbed.createIframe ? edsmEmbed.createIframe() : edsmEmbed.tasks++;