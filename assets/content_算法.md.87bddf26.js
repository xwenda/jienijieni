import{_ as s,o as a,c as n,X as t}from"./chunks/framework.753bfd52.js";const d=JSON.parse('{"title":"算法","description":"","frontmatter":{},"headers":[],"relativePath":"content/算法.md"}'),e={name:"content/算法.md"},l=t(`<h1 id="算法" tabindex="-1">算法 <a class="header-anchor" href="#算法" aria-label="Permalink to &quot;算法&quot;">​</a></h1><h2 id="快排" tabindex="-1">快排 <a class="header-anchor" href="#快排" aria-label="Permalink to &quot;快排&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function quickSort(arr) {</span></span>
<span class="line"><span style="color:#A6ACCD;">	var len = arr.length</span></span>
<span class="line"><span style="color:#A6ACCD;">	if (len &lt; 1) return arr</span></span>
<span class="line"><span style="color:#A6ACCD;"> 	var mid=Math.floor(arr.length/2)</span></span>
<span class="line"><span style="color:#A6ACCD;">    var temp=arr.splice(mid,1)</span></span>
<span class="line"><span style="color:#A6ACCD;">	var left = []</span></span>
<span class="line"><span style="color:#A6ACCD;">	var right = []</span></span>
<span class="line"><span style="color:#A6ACCD;">	for(var i = 0;i &lt; len;i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		if(arr[i] &lt; temp) {</span></span>
<span class="line"><span style="color:#A6ACCD;">			left.push(arr[i])</span></span>
<span class="line"><span style="color:#A6ACCD;">		} else if(arr[i] &gt;= temp) {</span></span>
<span class="line"><span style="color:#A6ACCD;">			right.push(arr[i])</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	return quickSort(left).concat(temp,quickSort(right))</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div>`,3),p=[l];function r(o,c,i,C,A,_){return a(),n("div",null,p)}const u=s(e,[["render",r]]);export{d as __pageData,u as default};
