# Contributing Guidelines

## ❗ Zákaz používání pluginu Obsidian_To_Anki

> Při používání Obsidianu nikdo nesmí používat plugin **Obsidian To Anki** pro synchronizaci kartiček do Anki, kromě člověka, co vytváří releases.

Jinak totiž hrozí to, že plugin vytvoří konflikty s kartičkama a bude se to muset manuálně opravovat (což je pain).

Ano, je to dementní, ale bohužel nemám čas ty releases automatizovat v pipelině :D

## 📖 Vytváření nových výpisků a kartiček

- Všechny **výpisky z přednášek a cvik** vytvářet pomocí zkratky `Ctrl+N`.
  - Zachová se tím konzistence výpisků napříč všemi soubory.
- **Kartičky** vytvářet pomocí specifikovaného templatu v `Templates/Flashcard.md`
  - V rámci kartiček lze také používat ostatní templates (např. `Accordion`).

## 📖 Exportování Anki decku

1. Kliknout na deck > `Export`
   - Zaškrtnout:
     - Include deck presets
     - Include media
     - Support older Anki versions
2. Zmáčknout `Export`

## 🔍 Reporting a opravování chyb

- **Jednoduché chyby** a vylepšení je možné opravit rovnou přímo v Obsidianu bez jakýchkoliv otázek (např. typos, zlepšení formátování, přidání příkladů, přidání dovysvětlení atd.).
- **Složitější chyby** a vylepšení je třeba zkonzultovat s _Morcinus_. (např. větší přepsání matematických vět, hromadné úpravy kartiček atd.)
