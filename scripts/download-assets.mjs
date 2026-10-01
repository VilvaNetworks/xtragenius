import { mkdir, writeFile } from 'node:fs/promises';
await mkdir('public/images',{recursive:true});
await mkdir('public/fonts',{recursive:true});
const photos = [
  ['classroom.jpg','https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1000&q=85'],
  ['young-learner.jpg','https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=85'],
  ['mathematics.jpg','https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=85'],
  ['handwriting.jpg','https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=85'],
];
await Promise.all(photos.map(async([name,url])=>{
  const response=await fetch(url,{signal:AbortSignal.timeout(25000)});
  if(!response.ok)throw new Error(`${name}: ${response.status}`);
  await writeFile(`public/images/${name}`,Buffer.from(await response.arrayBuffer()));
  console.log(`Downloaded ${name}`);
}));
const response=await fetch('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400..700&family=Manrope:wght@400..800&display=swap',{headers:{'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'},signal:AbortSignal.timeout(25000)});
const css=await response.text();
await mkdir('artifacts',{recursive:true});
await writeFile('artifacts/font-response.css',css);
const blocks=[...css.matchAll(/\/\* latin \*\/\s*(@font-face\s*\{[^}]+\})/g)].map(m=>m[1]);
if(!blocks.length) throw new Error('No Latin font subsets found');
const urls=[...new Set(blocks.map(block=>block.match(/url\(([^)]+)\)/)[1]))];
let fontCss=blocks.join('\n');
await Promise.all(urls.map(async(url,i)=>{const r=await fetch(url,{signal:AbortSignal.timeout(25000)});if(!r.ok)throw new Error(`Font ${r.status}`);const name=`font-${i}.woff2`;await writeFile(`public/fonts/${name}`,Buffer.from(await r.arrayBuffer()));fontCss=fontCss.replaceAll(url,`/fonts/${name}`);}));
await writeFile('public/fonts/fonts.css',fontCss);
for(const [family,directory] of [['DM-Sans','dmsans'],['Manrope','manrope']]) {
  const license = await fetch(`https://raw.githubusercontent.com/google/fonts/main/ofl/${directory}/OFL.txt`,{signal:AbortSignal.timeout(25000)});
  if(!license.ok) throw new Error(`Font licence: ${license.status}`);
  await writeFile(`public/fonts/${family}-OFL.txt`,await license.text());
}
console.log('Local fonts ready');
