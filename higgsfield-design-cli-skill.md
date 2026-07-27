# Higgsfield CLI Skill — Claude Code Edition (Master)

Use this skill for ALL image, video, and ad generation via Higgsfield in Claude Code. No browser needed — all generation runs through the MCP API.

---

## CREDIT AWARENESS — CHECK BEFORE EVERY SESSION

- `nano_banana_2` costs **2 credits per image** via the API — always, no exceptions
- The Unlimited toggle in Higgsfield's browser UI does NOT affect API or CLI calls
- Check balance before generating 3+ images: call `Higgsfield:balance`
- Always tell the user their credit balance before multi-image sessions
- Warn the user if balance drops below 200 before continuing

---

## GENERATION FLOWS

### Image Flow
1. Check balance if generating 3+ images
2. `media_upload` — get presigned URL for reference image
3. `curl -X PUT` — upload bytes from local file path
4. `media_confirm` — confirm upload, receive media ID
5. `generate_image` — model: `nano_banana_2`, aspect_ratio: `9:16`
6. Result appears in higgsfield.ai → History tab

### Video Flow
1. `media_upload` → `curl -X PUT` → `media_confirm`
2. `generate_video` — model: `kling3_0` or `veo_3_1`, prompt + media IDs
3. Result appears in higgsfield.ai → History tab

---

## MODELS

### Images — ALWAYS `nano_banana_2` (Nano Banana Pro)
- **Model ID:** `nano_banana_2`
- **Cost:** 2 credits per image — browser Unlimited toggle does NOT apply to the API
- **Never change this model** unless user explicitly asks
- Never use a model that costs more credits when `nano_banana_2` is available

| Format | Ratio | Use |
|--------|-------|-----|
| Reels / TikTok | `9:16` | DEFAULT |
| Feed square | `1:1` | Only if requested |
| Portrait feed | `4:5` | Only if requested |
| Landscape / YouTube | `16:9` | Only if requested |

### Videos — Kling and Google Veo Only
| Priority | Model ID | Best For |
|----------|----------|----------|
| 1st choice | `kling3_0` | UGC, lifestyle, product demos, fast-cut |
| 2nd choice | `veo_3_1` | Cinematic, editorial, high-detail |
| Never use | `seedance_2_0` | Too expensive — never use |

Default to `kling3_0`. Only switch to `veo_3_1` for clearly cinematic work or when user explicitly asks.

---

## STEP 0 — DEEP REFERENCE IMAGE ANALYSIS (ALWAYS, NEVER SKIP)

Before writing a single word of any prompt, analyze the reference image fully and state every finding out loud. This analysis is the foundation of every creative decision. Never guess — describe only what you actually see.

### 0A — Product Identity
- What is it exactly? Category, subcategory, format, size
- What is it made of? Glass, plastic, metal, fabric, ceramic, paper, etc.
- What is the finish? Glossy / matte / frosted / textured / metallic / holographic
- What shape? Tall and slim / wide / geometric / organic / angular / rounded
- What does the label/packaging say? Read everything — brand name, product name, tagline, all descriptors

### 0B — Color Extraction (Critical — drives everything downstream)
- **Primary color:** Dominant color — name it and describe tone (warm/cool/muted/saturated)
- **Secondary color:** Second most present color
- **Accent color:** Any highlight, metallic, or contrast detail
- **Label/text color:** Color of the typography on the packaging
- **Overall temperature:** Warm / cool / neutral

These extracted colors MUST appear in: background tone, lighting gel, prop colors, overlay text color, shadow tones. Never introduce a color not present in the product.

### 0C — Brand Vibe Detection
Assign ONE primary vibe and ONE secondary vibe:

| Vibe | Visual Signals |
|------|---------------|
| Luxury | Dark tones, gold/silver, minimal text, elegant serif, heavy negative space |
| Streetwear | Bold graphics, distressed textures, loud colors, heavy sans-serif, urban |
| Wellness | Soft neutrals, botanicals, clean layout, rounded font, light and airy |
| Natural/Organic | Earth tones, raw textures, handwritten or stamp font, unpolished |
| Bold/Playful | Bright saturated colors, fun shapes, thick fonts, high energy |
| Minimal/Modern | White space dominant, geometric, monochrome, precise |
| Premium Food/Bev | Rich dark or wood backgrounds, ingredient props, warm editorial light |
| Tech/Functional | Clean surfaces, precise type, cool tones, engineered feel |
| Trendy/Gen Z | Maximalist, layered, nostalgic or Y2K, chaotic but intentional |

### 0D — Typography Analysis
Study the fonts on the packaging and record:
- **Weight:** Thin / light / regular / bold / heavy / black
- **Style:** Serif / sans-serif / script / display / condensed / extended
- **Case:** Uppercase / lowercase / mixed
- **Spacing:** Tight / normal / wide / very open
- **Energy:** Formal / casual / aggressive / delicate / playful / authoritative

The overlay text in every ad MUST match or complement this energy. Never put heavy gothic type on a soft wellness brand. Never put thin elegant serif on a streetwear product.

### 0E — Target Audience
- Age range
- Lifestyle: athlete / creative / parent / professional / student / etc.
- Platforms: TikTok / Instagram / Pinterest / etc.
- What they care about: performance / aesthetics / status / health / value / identity
- What kind of ad would make THEM stop scrolling

### 0F — What Does NOT Belong
List 3–5 things that would be completely wrong for this brand. Be specific.
Example: "No dark dramatic lighting — this is a soft wellness brand." / "No script fonts — this brand is geometric and modern." / "No busy backgrounds — this packaging needs breathing room."

---

## STEP 1 — CREATIVE DIRECTION (PICK ONE PER AD, NEVER MIX)

| Direction | What It Looks Like | Best For |
|-----------|-------------------|----------|
| Cinematic Hero | Product centered, dramatic lighting, bold composition, movie poster feel | Luxury, spirits, premium skincare |
| Lifestyle Aspiration | Product in real scene, dream-life moment, attainable aspirational | Fashion, food, home goods |
| UGC Authentic | Handheld feel, natural imperfect light, real-person energy | Supplements, beauty, everyday products |
| Minimal Float | Product on clean background, negative space dominant, understated | Luxury, tech, minimal brands |
| Bold Editorial | High contrast, graphic color blocking, magazine energy | Streetwear, beauty, bold CPG |
| Ingredient/Detail | Extreme close-up of texture, material, or ingredients | Food, skincare, beverages |
| Energy/Hype | Bold colors, dynamic composition, Gen Z energy, loud and fast | Streetwear, energy drinks, youth brands |

Pick ONE and commit fully. Never blend two directions in the same ad.

---

## STEP 2 — PROMPT ARCHITECTURE (ALL LAYERS MANDATORY)

Every prompt must include ALL layers in this exact order:

`[SCENE] + [LIGHTING] + [EXTRACTED COLOR PALETTE] + [MOOD] + [SHOT TYPE & CAMERA] + [TEXTURE & MATERIAL DETAIL] + [OVERLAY TEXT] + [REALISM TAG]`

### Layer 1 — Scene
Never generic. Built entirely around the extracted brand vibe and colors.

- Name the exact surface the product sits on
- Name background elements (what, how far, how blurred)
- Name any props — only ones native to the brand world
- Scene must feel natural for the target audience

| Vibe | Scene Examples |
|------|---------------|
| Luxury | Black lacquered surface, deep charcoal wall softly OOF, single dried eucalyptus stem, architectural shadows |
| Wellness | Unbleached linen on raw oak, small ceramic bowl with dried herbs, warm morning window light |
| Streetwear | Rain-slicked concrete floor, blurred neon reflections, product on worn skateboard deck |
| Bold/Playful | Saturated coral seamless background, geometric shapes scattered around product |
| Food/Bev | Dark walnut wood, moody candlelight, raw ingredients surrounding product, condensation on glass |
| Minimal | Pure white or off-white seamless, product only, no props, maximum negative space |
| Tech | Matte black desk surface, clean background, single soft keylight, no distractions |

### Layer 2 — Lighting
Name the exact setup. Be technical. Lighting makes or breaks realism.

- Key light direction: left / right / above / below / front / back
- Quality: hard sharp shadows vs soft diffused
- Color temperature: warm golden / cool daylight / neutral / colored gel
- Must match the brand's extracted color temperature from Step 0B

| Setup | Description | Best For |
|-------|-------------|----------|
| Soft box left | Diffused, even, gentle shadow on right | Skincare, beauty, clean |
| Dramatic Rembrandt | One strong side light, deep shadows | Luxury, spirits, dark brands |
| Golden hour | Warm orange-yellow side light, long shadows | Lifestyle, food, wellness |
| Overhead flat | Even from above, minimal shadows | Flatlay, food, minimal |
| Backlight rim | Source behind product, glowing edges | Supplements, beverages, glass |
| Neon wash | Colored practical light, purple/pink/blue | Streetwear, hype, nightlife |
| Natural window | Diffused daylight one side, soft and real | UGC, wellness, home goods |
| Hard spot | Single tight spotlight, everything else dark | Luxury, perfume, hero shots |

### Layer 3 — Extracted Color Palette
Use EXACT colors from Step 0B. Name them descriptively in the prompt.

- Background harmonizes with — not perfectly matches — the primary extracted color
- Lighting color complements the palette temperature
- Props pull from secondary or accent colors
- Never introduce a color not present in the product

Example: Deep forest green product with gold lettering →
`"deep muted sage background, warm amber lighting gel, small dried gold wheat stalks as props, dark olive shadows"`

### Layer 4 — Mood
One specific emotion. Precise, not vague.

- "The feeling of opening something expensive for the first time"
- "Sunday morning slow and unhurried"
- "Power and control — this person has it figured out"
- "Raw and real — no filter, no performance"
- "The moment before a night out when everything feels electric"
- "Clean slate, fresh start, new routine"
- "Earned — this is for people who put in the work"

### Layer 5 — Shot Type and Camera
Specify both angle AND framing. Always include depth of field.

| Shot | Camera Direction | Use |
|------|-----------------|-----|
| Tight hero | 45° above, slight tilt | Packaging showcase, single product |
| Overhead flatlay | Directly above, perfectly level | Styled arrangements, ingredients |
| Eye-level straight | Perfectly level, product fills 60% of frame | Clean product ad |
| Low dramatic | Camera below product looking up | Power, luxury, scale |
| Handheld slight tilt | Slight imperfect angle | UGC, authentic content |
| Macro detail | Extreme close-up of texture or label | Ingredient, material, craft |
| Wide environmental | Product small in its environment | Lifestyle, aspirational scenes |

Depth of field: always specify — "shallow DOF, background softly bokeh'd" vs "deep focus, everything sharp"

### Layer 6 — Texture and Material Detail
This is what separates realistic from fake. Always include micro-details.

- Surface the product rests on: grain direction, reflectivity, temperature feel
- Natural imperfections: condensation, dust, slight wear, fingerprints
- Product material reflected in the environment
- Micro-details that reward close attention

Examples:
- "Slight condensation on the glass bottle catching the backlight"
- "Fine dust particles visible in the shaft of light behind the product"
- "Matte label slightly raised from bottle surface, casting a hairline shadow"
- "Subtle reflection of the product color in the polished marble below"
- "Fingerprint smudge barely visible on the side of the can — human and real"
- "Fabric weave of the surface clearly visible under raking light"

### Layer 7 — Overlay Text (MANDATORY for every ad)
Every ad must have overlay text. Include content AND full design direction.

**Copy rules:**
- Hero text: 1–5 words max
- Supporting text optional: 1 short line, smaller, above or below hero
- English and/or Spanish based on target audience
- Copy speaks to the audience's identity or desire — NOT product features

**Font must match Step 0D typography analysis — describe fully in prompt:**
Include: weight, style, case, letter-spacing, color, exact placement

Write it fully, never lazily:
❌ "text that says 'built different'"
✅ "bold heavy white sans-serif uppercase text 'BUILT DIFFERENT' bottom third of frame, tight letter spacing, subtle drop shadow for legibility"

| Vibe | Font Direction |
|------|---------------|
| Luxury / fashion | Thin elegant serif, wide letter-spacing, lowercase, lots of air |
| Streetwear / hype | Bold heavy sans-serif, uppercase, tight tracking, aggressive |
| Wellness / clean | Soft rounded modern font, lowercase, generous line height |
| Food / lifestyle | Warm friendly script or bold display font |
| Tech / minimal | Clean geometric sans-serif, medium weight, precise |
| Gothic / dark | Heavy blackletter or condensed display, uppercase |

**Placement:** Top third or bottom third. Left or right aligned for editorial feel. Never blend text into background — always contrast.

**English copy bank:**
- Luxury: "worn by few." / "the standard." / "nothing else comes close." / "made to last."
- Wellness: "your skin deserves this." / "slow down." / "feel it." / "finally."
- Streetwear: "BUILT DIFFERENT." / "NO DAYS OFF." / "EARNED." / "REAL ONES KNOW."
- Food/Bev: "taste the difference." / "made with care." / "worth every sip."
- General: "less noise. more you." / "made for this." / "the one you needed."

**Spanish copy bank:**
- Luxury: "lo que siempre quisiste." / "para los que saben." / "sin igual." / "hecho para durar."
- Wellness: "cuídate." / "tu momento." / "siente la diferencia." / "mereces esto."
- Streetwear: "LOS QUE SABEN, SABEN." / "HECHO DIFERENTE." / "SIN EXCUSAS."
- Food/Bev: "el sabor que buscabas." / "hecho con amor." / "así de simple."
- General: "tu hogar, tu estilo." / "lo tuyo." / "¡Feliz Viernes!"

### Layer 8 — Realism Tag (MANDATORY — never remove, never shorten)
End every single prompt with exactly:
`hyperrealistic, photorealistic, indistinguishable from real photography, no AI artifacts, ultra sharp, 8K`

Never use "beautiful" or "amazing" — show it through specifics instead.

---

## AD DESIGN RULES — NON-NEGOTIABLE

1. **One hero element.** Product OR copy leads — never both competing equally. Decide before prompting.
2. **Breathing room always.** Every ad needs negative space. Overcrowded = amateur.
3. **3-second rule.** Entire message lands in 3 seconds. If it takes longer, simplify.
4. **Text contrast is mandatory.** Light bg = dark text. Dark bg = light text. Never let text blend in.
5. **Max 2 font weights.** Hero + supporting = 2 weights of the same family. Not 2 different fonts.
6. **Every prop earns its place.** If you can't justify it in one sentence, remove it.
7. **Consistent lighting direction.** Key light, fill, and shadows all from the same direction. Inconsistency = instantly fake.
8. **Product is always the sharpest element.** Background blurs. Product stays in perfect sharp focus.
9. **Avoid dead-center symmetry unless intentional.** Rule of thirds unless symmetry IS the brand.
10. **Match energy to platform.** Reels/TikTok: bold, fast read, more energy. Feed: refined, can breathe. Stories: immediate impact, less copy.

---

## VARIANTS — ALWAYS TRULY DISTINCT

Every variant must differ across ALL four dimensions simultaneously:
1. **Creative direction** — hero vs UGC vs flatlay vs editorial vs energy/hype
2. **Lighting and mood** — different time of day, emotional tone, color temperature
3. **Copy and text design** — different message, font energy, placement
4. **Color story** — different background drawing from a different part of the extracted palette

Before generating each variant say:
"Variant [N] is distinct because: [direction], [lighting], [copy], [color]."
Cannot fill all four? Redesign before spending credits.

---

## VIDEO STRUCTURE — PICK ONE PER JOB

Always tell the user which structure you chose and why.

**Structure 1 — Hook + Demo + Reaction** *(beauty, wellness, food, gadgets)*
Bold opening → close-up in use → genuine reaction. Handheld, natural light, UGC energy.

**Structure 2 — Problem → Solution** *(skincare, fitness, cleaning, supplements)*
Frustrated person → discovers product → uses it → satisfied result. Quick cuts, documentary.

**Structure 3 — Unbox + Try + Verdict** *(fashion, accessories, electronics)*
Packaging reveal → immediate try → genuine first reaction → product to camera.

**Structure 4 — Day in Life** *(fashion, beauty, lifestyle)*
Cinematic routine, product appears naturally, no hard sell, golden light, slow pans.

**Structure 5 — Viral Fast-Cut** *(trending, hype brands)*
Multiple angles, extreme close-ups, wide shots, reactions — fast, on-beat, energetic.

---

## BAD RESULT PROTOCOL

1. Show the result to the user
2. Explain exactly what went wrong
3. Ask what they want changed
4. Never silently regenerate

| Problem | Root Cause | Fix |
|---------|------------|-----|
| Looks fake / plasticky | No material texture, weak realism tag | Add surface textures, micro-details, strengthen realism tag |
| Wrong vibe entirely | Brand read skipped or shallow | Redo full Step 0, state explicitly what NOT to include |
| Boring / generic | No scene specificity | Concrete scene, stronger creative direction |
| Text unreadable or garbled | Prompt not explicit enough | Describe weight, style, color, placement in full |
| Colors clash | Palette not from product | Re-extract from reference, rebuild palette layer |
| Lighting inconsistent | Multiple undefined sources | Name one key, one fill, specify all directions |
| Product out of focus | No sharpness instruction | Add "product in perfect sharp focus, shallow DOF on background" |
| Props feel wrong | No brand justification | Remove all, only re-add ones that earn their place |

---

## QUICK REFERENCE

| Setting | Value |
|---------|-------|
| Image model | `nano_banana_2` |
| Image cost | 2 credits per image (API always) |
| Video default | `kling3_0` |
| Video cinematic | `veo_3_1` |
| Video never | `seedance_2_0` |
| Default ratio | `9:16` |
| Overlay text | Always for ads (EN + ES) |
| Brand read | Always — full deep analysis before first prompt |
| Variants | Differ in direction + lighting + copy + color |
| Bad results | Show → explain → ask → retry |
| Low credits | Warn when balance drops below 200 |