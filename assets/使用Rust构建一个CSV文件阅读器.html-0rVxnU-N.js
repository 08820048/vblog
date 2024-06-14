import{_ as s,c as n,o as a,a as e}from"./app-CVgY-oE7.js";const p={},t=e(`<h1 id="使用rust实现一个csv命令行读取器" tabindex="-1"><a class="header-anchor" href="#使用rust实现一个csv命令行读取器"><span>使用Rust实现一个CSV命令行读取器</span></a></h1><h2 id="成品展示" tabindex="-1"><a class="header-anchor" href="#成品展示"><span>成品展示</span></a></h2><p><img src="https://images.waer.ltd/notes/csv.gif" alt="csv"></p><h2 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手"><span>快速上手</span></a></h2><ul><li>依赖导入：</li></ul><div class="language-toml line-numbers-mode" data-highlighter="prismjs" data-ext="toml" data-title="toml"><pre class="language-toml"><code><span class="line">cargo add csv</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>读取实现：</li></ul><div class="language-rust line-numbers-mode" data-highlighter="prismjs" data-ext="rs" data-title="rs"><pre class="language-rust"><code><span class="line"><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>error<span class="token punctuation">::</span></span><span class="token class-name">Error</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>fs<span class="token punctuation">::</span></span><span class="token class-name">File</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>path<span class="token punctuation">::</span></span><span class="token class-name">Path</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">fn</span> <span class="token function-definition function">read_csv</span><span class="token operator">&lt;</span><span class="token class-name">P</span><span class="token punctuation">:</span> <span class="token class-name">AsRef</span><span class="token operator">&lt;</span><span class="token class-name">Path</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">(</span>filename<span class="token punctuation">:</span> <span class="token class-name">P</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Result</span><span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">Box</span><span class="token operator">&lt;</span><span class="token keyword">dyn</span> <span class="token class-name">Error</span><span class="token operator">&gt;&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> file <span class="token operator">=</span> <span class="token class-name">File</span><span class="token punctuation">::</span><span class="token function">open</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span><span class="token operator">?</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> <span class="token keyword">mut</span> rdr <span class="token operator">=</span> <span class="token namespace">csv<span class="token punctuation">::</span></span><span class="token class-name">Reader</span><span class="token punctuation">::</span><span class="token function">from_reader</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">for</span> result <span class="token keyword">in</span> rdr<span class="token punctuation">.</span><span class="token function">records</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> record <span class="token operator">=</span> result<span class="token operator">?</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;{:?}&quot;</span><span class="token punctuation">,</span> record<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token class-name">Ok</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Result</span><span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">Box</span><span class="token operator">&lt;</span><span class="token keyword">dyn</span> <span class="token class-name">Error</span><span class="token operator">&gt;&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> filename <span class="token operator">=</span> <span class="token string">&quot;src/email.csv&quot;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">read_csv</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>这是一段简单的<code>Rust</code>程序，演示了如何使用<code>csv\`\`crate</code>中的读取<code>API</code>,通过指定<code>csv</code>路径进行<code>csv</code>数据的读取。</p></blockquote><ol><li><p><code>use std::error::Error;</code>, <code>use std::fs::File;</code>, <code>use std::path::Path;</code>：</p><ul><li>这些是Rust语言中用于导入标准库中的错误处理、文件操作和路径相关模块的语句。</li></ul></li><li><p><code>fn read_csv&lt;P: AsRef&lt;Path&gt;&gt;(filename: P) -&gt; Result&lt;(), Box&lt;dyn Error&gt;&gt;</code>：</p><ul><li>这是一个函数定义，名为<code>read_csv</code>，它接受一个实现了<code>AsRef&lt;Path&gt;</code> trait 的泛型参数<code>P</code>，表示文件名。函数返回一个<code>Result</code>枚举类型，其中<code>Ok(())</code>表示成功，<code>Err</code>包含一个实现了<code>Error</code> trait 的错误对象的<code>Box</code>指针。</li><li>函数打开指定的CSV文件，创建一个CSV读取器（<code>csv::Reader</code>），然后遍历文件中的每一行记录并打印出来。</li></ul></li><li><p><code>fn main() -&gt; Result&lt;(), Box&lt;dyn Error&gt;&gt;</code>：</p><ul><li>这是程序的入口点，也是主函数。它也返回一个<code>Result</code>枚举类型，用于处理可能出现的错误。</li><li>在<code>main</code>函数中，指定了要读取的CSV文件的文件名为<code>&quot;src/email.csv&quot;</code>，然后调用<code>read_csv</code>函数来处理这个文件。</li></ul></li><li><p><code>let file = File::open(filename)?;</code>：</p><ul><li>在<code>read_csv</code>函数中，这行代码尝试打开指定的文件，<code>?</code>操作符用于处理可能出现的错误，如果出现错误，则会将错误传播到调用方。</li></ul></li><li><p><code>let mut rdr = csv::Reader::from_reader(file);</code>：</p><ul><li>创建一个CSV读取器<code>rdr</code>，并从打开的文件中读取数据。</li></ul></li><li><p><code>for result in rdr.records() { ... }</code>：</p><ul><li>使用<code>for</code>循环遍历CSV文件中的每一行记录。</li></ul></li><li><p><code>let record = result?;</code>：</p><ul><li>在循环中，尝试将每一行记录解析为<code>csv::StringRecord</code>类型的<code>record</code>，<code>?</code>操作符用于处理可能的解析错误。</li></ul></li><li><p><code>println!(&quot;{:?}&quot;, record);</code>：</p><ul><li>打印每一行记录的内容。</li></ul></li><li><p><code>Ok(())</code>：</p><ul><li>在函数末尾，返回一个<code>Ok(())</code>表示函数执行成功。</li></ul></li></ol><hr><ul><li>读取结果：</li></ul><p><img src="https://images.waer.ltd/notes/image-20240526192615414.png" alt="image-20240526192615414"></p><p><code>csv</code>文件的读取功能基本实现了，但是每次读取需要我们手动修改代码，指定要读取的<code>csv</code>文件路径，相对还是不够实用和灵活，特别是对于非程序猿来说。下面将对代码进行进一步提取和优化，将读取的功能封装为命令行程序，提升使用体验。</p><hr><h2 id="命令行程序封装" tabindex="-1"><a class="header-anchor" href="#命令行程序封装"><span>命令行程序封装</span></a></h2><p>关于命令行，<code>Rust</code>的<code>crate</code>中有很多不错的库，在之前我的文章中也提及了部分，这里选择使用<code>clap</code>这个<code>crate</code>来实现。</p><div class="language-toml line-numbers-mode" data-highlighter="prismjs" data-ext="toml" data-title="toml"><pre class="language-toml"><code><span class="line"><span class="token punctuation">[</span><span class="token table class-name">dependencies</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token key property">ansi_term</span> <span class="token punctuation">=</span> <span class="token string">&quot;0.12.1&quot;</span></span>
<span class="line"><span class="token key property">clap</span> <span class="token punctuation">=</span> <span class="token punctuation">{</span> <span class="token key property">version</span> <span class="token punctuation">=</span> <span class="token string">&quot;4.5.4&quot;</span><span class="token punctuation">,</span> <span class="token key property">features</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;derive&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token key property">csv</span> <span class="token punctuation">=</span> <span class="token string">&quot;1.3.0&quot;</span></span>
<span class="line"><span class="token key property">prettytable-rs</span> <span class="token punctuation">=</span> <span class="token string">&quot;0.10.0&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>结构分离，为了利于维护，将读取<code>CSV</code>文件的方法独立在<code>lib.rs</code>中，命令行参数处理等内容依旧在<code>main.rs</code></p></li><li><p>lib.rs</p></li></ul><div class="language-rust line-numbers-mode" data-highlighter="prismjs" data-ext="rs" data-title="rs"><pre class="language-rust"><code><span class="line"><span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">read_csv</span><span class="token operator">&lt;</span><span class="token class-name">P</span><span class="token punctuation">:</span> <span class="token class-name">AsRef</span><span class="token operator">&lt;</span><span class="token class-name">Path</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">(</span>filename<span class="token punctuation">:</span> <span class="token class-name">P</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Result</span><span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">Box</span><span class="token operator">&lt;</span><span class="token keyword">dyn</span> <span class="token class-name">Error</span><span class="token operator">&gt;&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> file <span class="token operator">=</span> <span class="token class-name">File</span><span class="token punctuation">::</span><span class="token function">open</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span><span class="token operator">?</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> <span class="token keyword">mut</span> rdr <span class="token operator">=</span> <span class="token namespace">csv<span class="token punctuation">::</span></span><span class="token class-name">Reader</span><span class="token punctuation">::</span><span class="token function">from_reader</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">let</span> <span class="token keyword">mut</span> table <span class="token operator">=</span> <span class="token class-name">Table</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 添加表头</span></span>
<span class="line">    <span class="token keyword">let</span> headers <span class="token operator">=</span> rdr</span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">headers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">?</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">iter</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token closure-params"><span class="token closure-punctuation punctuation">|</span>h<span class="token closure-punctuation punctuation">|</span></span> <span class="token class-name">Cell</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span>h<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">style_spec</span><span class="token punctuation">(</span><span class="token string">&quot;Fg=green&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    table<span class="token punctuation">.</span><span class="token function">add_row</span><span class="token punctuation">(</span><span class="token class-name">Row</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span>headers<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 添加记录</span></span>
<span class="line">    <span class="token keyword">for</span> result <span class="token keyword">in</span> rdr<span class="token punctuation">.</span><span class="token function">records</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> record <span class="token operator">=</span> result<span class="token operator">?</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">let</span> cells<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">Cell</span><span class="token operator">&gt;</span> <span class="token operator">=</span> record<span class="token punctuation">.</span><span class="token function">iter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token closure-params"><span class="token closure-punctuation punctuation">|</span>field<span class="token closure-punctuation punctuation">|</span></span> <span class="token class-name">Cell</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span>field<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        table<span class="token punctuation">.</span><span class="token function">add_row</span><span class="token punctuation">(</span><span class="token class-name">Row</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span>cells<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    table<span class="token punctuation">.</span><span class="token function">printstd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token class-name">Ok</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>感觉没啥新的东西可以讲的，这个方法的主要逻辑在上面已经说过，至于内容的打印，还是使用之前在<code>X-SCAN</code>端口扫描器中使用的<code>Table</code>进行美化。</p></blockquote><ul><li>main.rs</li></ul><div class="language-rust line-numbers-mode" data-highlighter="prismjs" data-ext="rs" data-title="rs"><pre class="language-rust"><code><span class="line"><span class="token keyword">use</span> <span class="token namespace">x_csvreader<span class="token punctuation">::</span></span>read_csv<span class="token punctuation">;</span></span>
<span class="line"><span class="token attribute attr-name">#[derive(Parser, Debug)]</span></span>
<span class="line"><span class="token keyword">struct</span> <span class="token type-definition class-name">Args</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token attribute attr-name">#[clap(short, long, help = <span class="token string">&quot;The path to the CSV file.&quot;</span>)]</span></span>
<span class="line">    path<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">fn</span> <span class="token function-definition function">print_infos</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token macro property">println!</span><span class="token punctuation">(</span></span>
<span class="line">        <span class="token string">&quot;{}&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token class-name">Blue</span><span class="token punctuation">.</span><span class="token function">paint</span><span class="token punctuation">(</span></span>
<span class="line">            <span class="token string">r#&quot;</span>
<span class="line">            __   __      _____  _______      __     _____                _</span>
<span class="line">            \\ \\ / /     / ____|/ ____\\ \\    / /    |  __ \\              | |</span>
<span class="line">             \\ V /_____| |    | (___  \\ \\  / /_____| |__) |___  __ _  __| | ___ _ __</span>
<span class="line">              &gt; &lt;______| |     \\___ \\  \\ \\/ /______|  _  // _ \\/ _\` |/ _\` |/ _ \\ &#39;__|</span>
<span class="line">             / . \\     | |____ ____) |  \\  /       | | \\ \\  __/ (_| | (_| |  __/ |</span>
<span class="line">            /_/ \\_\\     \\_____|_____/    \\/        |_|  \\_\\___|\\__,_|\\__,_|\\___|_|</span>
<span class="line">        author:代号0408</span>
<span class="line">        version:0.1.0</span>
<span class="line">        &quot;#</span></span>
<span class="line">        <span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">print_infos</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> args <span class="token operator">=</span> <span class="token class-name">Args</span><span class="token punctuation">::</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 调用lib.rs中定义的read_csv函数</span></span>
<span class="line">    <span class="token keyword">match</span> <span class="token function">read_csv</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>args<span class="token punctuation">.</span>path<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">Ok</span><span class="token punctuation">(</span>_<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;=============================&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;CSV 文件读取成功！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token class-name">Err</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token macro property">eprintln!</span><span class="token punctuation">(</span><span class="token string">&quot;读取 CSV 文件时出现错误：{}&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>逻辑简单，就不赘述了。如果不了解字符打印美化和表格美化这两个<code>lib</code>基本使用的，建议翻下我往期的文章，都是有写的。</p></blockquote><p>那么如何使用呢？</p><div class="language-powershell line-numbers-mode" data-highlighter="prismjs" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="line">cargo run <span class="token operator">--</span> <span class="token operator">--</span>path &lt;csv文件路径&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>不妨将开头的效果复现一下：</p><div class="language-powershell line-numbers-mode" data-highlighter="prismjs" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="line">cargo run <span class="token operator">--</span> <span class="token operator">--</span>path C:\\RustProjects\\x-csvreader\\src\\email<span class="token punctuation">.</span>csv</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><img src="https://images.waer.ltd/notes/image-20240526225726969.png" alt=""></p><p>当然，为了演示的效果，这里选择的<code>CSV</code>文件数据量并不大，处理大数据量的文件也是可以的，只不过打印出来的表格数据可能会出现终端 <strong>霸屏</strong>的情况，纸上得来终觉浅！建议你自己试试，这里就不截图了。</p><hr><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>这篇文章主要学习如何基于<code>Rust</code>使用<code>csv</code>这个<code>crate</code>构建一个<code>CSV</code>文件读取器的过程。学习了<code>csv</code>相关的用法以及一些往期学过的<code>crate</code>的复习，兼顾了实用性和<code>Rust</code>的学习，是个很不错的练手小项目。</p><hr><h2 id="相关资源" tabindex="-1"><a class="header-anchor" href="#相关资源"><span>相关资源</span></a></h2><ul><li><p><a href="https://crates.io/crates/clap" target="_blank" rel="noopener noreferrer">clap</a></p></li><li><p><a href="https://crates.io/crates/csv" target="_blank" rel="noopener noreferrer">csv</a></p></li><li><p>[CSV示例文件下载地址1](<a href="https://www.stats.govt.nz/large-datasets/csv-files-for-download/" target="_blank" rel="noopener noreferrer">可供下载的 CSV 文件 |新西兰统计局 --- CSV files for download | Stats NZ</a>)</p></li><li><p>[CSV示例文件下载地址2](<a href="https://support.staffbase.com/hc/en-us/articles/360007108391-CSV-File-Examples" target="_blank" rel="noopener noreferrer">CSV File Examples – Staffbase Support Portal</a>)</p></li></ul>`,36),l=[t];function c(o,i){return a(),n("div",null,l)}const r=s(p,[["render",c],["__file","使用Rust构建一个CSV文件阅读器.html.vue"]]),d=JSON.parse('{"path":"/posts/%E4%BD%BF%E7%94%A8Rust%E6%9E%84%E5%BB%BA%E4%B8%80%E4%B8%AACSV%E6%96%87%E4%BB%B6%E9%98%85%E8%AF%BB%E5%99%A8.html","title":"使用Rust实现一个CSV命令行读取器","lang":"en-US","frontmatter":{"date":"2024-05-15T00:00:00.000Z","category":["Rust练习"],"tag":["Rust","CSV"],"excerpt":"<p style=\\"color:gray;\\">X-CSV-Reader:一个使用Rust实现CSV命令行读取器，直接命令行读取CSV，方便快捷，主要学习csv这个crate!</p>"},"headers":[{"level":2,"title":"成品展示","slug":"成品展示","link":"#成品展示","children":[]},{"level":2,"title":"快速上手","slug":"快速上手","link":"#快速上手","children":[]},{"level":2,"title":"命令行程序封装","slug":"命令行程序封装","link":"#命令行程序封装","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"相关资源","slug":"相关资源","link":"#相关资源","children":[]}],"git":{"updatedTime":1718336313000,"contributors":[{"name":"八尺","email":"ilikexff@gmail.com","commits":1}]},"filePathRelative":"posts/使用Rust构建一个CSV文件阅读器.md"}');export{r as comp,d as data};
