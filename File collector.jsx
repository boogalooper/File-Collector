///////////////////////////////////////////////////////////////////////////////
// File collector
// jazz-y@ya.ru
///////////////////////////////////////////////////////////////////////////////
/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>File collector</name>
<menu>automate</menu>
<category>batch</category>
<eventid>808f4b96-50f3-4ff3-b00f-bc4189e89c5c</eventid>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/
#target photoshop
$.localize = true
//$.locale = "ru"
{
    var strMessage = "File collector",
        rev = "0.82",
        GUID = "808f4b96-50f3-4ff3-b00f-bc4189e89c5c",
        strBnBrowse = { ru: "Обзор...", en: "Browse..." },
        strBnCancel = { ru: "Отмена", en: "Cancel" },
        strbnListEdit = { ru: "Редактировать", en: "Edit" },
        strbnOpenList = { ru: "Открыть", en: "Open" },
        strBnSaveList = { ru: "Сохранить список в файл", en: "Save list to file" },
        strBnSearch = { ru: "Поиск", en: "Search" },
        strBnSearchRename = { ru: "Переименовать", en: "Rename" },
        strDivider = { ru: "Разделитель слов:", en: "Word delimeter:" },
        strDividerAuto = { ru: "авто", en: "auto" },
        strDividerComma = { ru: "запятая", en: "comma" },
        strDividerDot = { ru: "точка", en: "dot" },
        strDividerLine = { ru: "|", en: "|" },
        strDividerSemicolon = { ru: ";", en: ";" },
        strDividerSpace = { ru: "пробел", en: "space" },
        strDividerTab = { ru: "табуляция", en: "tab" },
        strEditList = { ru: "Редактировать исходный список", en: "Edit source list" },
        strErrPreset = { ru: "Набор с именем \"%1\" уже существует. Перезаписать?", en: "A set with the name \"%1\" already exists. Overwrite?" },
        strFilterHooks = { ru: "скобки", en: "hooks" },
        strFilterHyphen = { ru: "дефис", en: "hyphen" },
        strFilterOther = { ru: "прочие символы", en: "other symbols" },
        strFilterSymbols = { ru: "Показывать символы:", en: "Show symbols:" },
        strList = { ru: "Список", en: "List" },
        strListEditLine = { ru: "Редактировать исходную строку", en: "Edit source line" },
        strListMode = { ru: "Режим отображения:", en: "View mode:" },
        strListModeHeaders = { ru: "список с заголовками", en: "list with headers" },
        strListModeText = { ru: "список", en: "list" },
        strPatternColumn = { ru: "столбец", en: "column" },
        strPatternDocument = { ru: "документ", en: "document" },
        strPatternFile = { ru: "имя файла", en: "file name" },
        strPatternFolder = { ru: "имя папки", en: "folder name" },
        strPatternHeader = { ru: "заголовок", en: "header" },
        strPatternInsert = { ru: "Вставить", en: "Insert" },
        strPatternInterval = { ru: "интервал", en: "interval" },
        strPatternLayer = { ru: 'имя слоя', en: 'layer name' },
        strPatternNewName = { ru: "Новое имя:", en: "New name:" },
        strPatternPrev = { ru: "Предыдущая строка", en: "Previous line" },
        strPatternRename = { ru: "Переименование:", en: "Rename:" },
        strPatternSearch = { ru: "Поиск:", en: "Search:" },
        strPnPattern = { ru: "Шаблон поиска и переименования файлов:", en: "File search and rename pattern:" },
        strPnSearch = { ru: "Список:", en: "List:" },
        strPnSource = { ru: "Источник:", en: "Source:" },
        strPnTarget = { ru: "Назначение:", en: "Destination:" },
        strPresetAdd = { ru: "Добавить", en: "Add new" },
        strPresetCopy = { ru: " копия", en: " copy" },
        strPresetDefailt = { ru: "по-умолчанию", en: "default" },
        strPresetDelete = { ru: "Удалить", en: "Delete" },
        strPresetLabel = { ru: "Пресет:", en: "Preset:" },
        strPresetNew = { ru: "Сохранение пресета", en: "Saving a preset" },
        strPresetPromt = { ru: "Укажите имя пресета\nБудут сохранены настройки имени подкаталога и файла.", en: "Specify the name of the preset\nSubdirectory and file name settings will be saved." },
        strPresetRefresh = { ru: "Обновить", en: "Refresh" },
        strPresetSave = { ru: "Сохранить", en: "Save" },
        strSearchDuplicates = { ru: 'создавать копии исходного файла при повторах имен файлов в результатах поиска', en: 'create copies of the original file when file names are repeated in search results' },
        strSearchFounded = { ru: "Готово к переименованию: ", en: "Ready to rename: " },
        strSearchMetadata = { ru: "сохранять исходное имя в метаданных файла", en: "save original name in metadata of file" },
        strSearchMove = { ru: "удалить найденные файлы из папки источника после копирования", en: "delete found files from the source folder after copying" },
        strSearchNotFound = { ru: "Не найдено: ", en: "Not found: " },
        strSearchRefresh = { ru: 'Генерация новых путей...', en: "Generation of new paths..." },
        strSearchSourceAsTarget = { ru: "та же папка, что и у источника", en: "same folder as source" },
        strSelectDocumentAction = { ru: "выберите документ из списка, если необходимо его открыть", en: "select a document from the list if you want to open it" },
        strSelectDocumentTip = { ru: "Открытые документы:", en: "Opened documents:" },
        strSelectFileAction = { ru: "выберите файл из списка, если необходимо его открыть", en: "select a file from the list if you need to open it" },
        strSelectFileTip = { ru: "В указанном каталоге найдены текстовые файлы:", en: "Text files were found in the specified directory:" },
        strSourceAllDocuments = { ru: "все открытые документы", en: "all opened documents" },
        strSourceAllFiles = { ru: "все файлы", en: "all files" },
        strSourceAllLayers = { ru: "все слои", en: "all layers" },
        strSourceFiles = { ru: "файлы", en: "files" },
        strSourceFilterFiles = { ru: "- искать следующие типы файлов", en: "- search following file types" },
        strSourceFilterLayers = { ru: "- искать следующие типы слоев", en: "- search following layer types" },
        strSourceLayers = { ru: "слои", en: "layers" },
        strSourceSubdir = { ru: "учитывать подкаталоги", en: "include subdirectories" },
        strBnAddList = { ru: "Загрузить список из файла", en: "Load list from file" },
        cfg = new Config,
        preset = new Preset,
        apl = new AM('application'),
        doc = new AM('document'),
        lr = new AM('layer'),
        allFiles = {},
        fromBridge = {},
        layerKindArray =
            [
                6, //const kAnySheet             = 0; 
                0, //const kPixelSheet           = 1;  
                3, //const kAdjustmentSheet      = 2;  
                2, //const kTextSheet            = 3;  
                0, //const kVectorSheet          = 4;  
                1, //const kSmartObjectSheet     = 5;  
                1, //const kVideoSheet           = 6;  
                4, //const kLayerGroupSheet      = 7;  
                2, //const k3DSheet              = 8;  
                3, //const kGradientSheet        = 9;  
                3, //const kPatternSheet         = 10;  
                3, //const kSolidColorSheet      = 11;  
                0, //const kBackgroundSheet      = 12;  
                6 //const kHiddenSectionBounder = 13;  
            ],
        layerTypesArray = [
            { ru: 'пиксельный слой', en: 'pixel layer' },
            { ru: 'смарт объект', en: 'smart Object' },
            { ru: 'текст', en: 'text' },
            { ru: 'настраиваемый слой', en: 'adjustment layer' },
            { ru: 'группа', en: 'group' },
            { ru: "выделенные слои", en: "selected layers" },
            'hidden layers'
        ];
}
if (app.playbackParameters.count) {
    try {
        var d = app.playbackParameters
        fromBridge.file = d.getString(d.getKey(0))
        fromBridge.folder = d.getString(d.getKey(1))
    } catch (e) { }
}
cfg.getScriptSettings(cfg)
var w = buildWindow(); var result = w.show()
if (result != 2) { cfg.putScriptSettings(cfg) }
var isCancelled = true
function buildWindow() {
    var target,
        renew,
        sourceText = [],
        formattedText = {},
        delimiter = "",
        headers = [],
        typesArray = [];
    {
        var w = new Window("dialog{text: '" + strMessage + " " + rev + "', orientation: 'column', alignChildren: ['fill', 'top'], spacing: 10,margins: 16 }"),
            pnSource = w.add("panel{text:'" + strPnSource + "', orientation: 'column', alignChildren: ['left', 'top'], spacing: 10, margins:10   }"),
            grMode = pnSource.add("group{orientation: 'row', alignChildren: ['left', 'center'], spacing: 10, margins: 0}"),
            rbFiles = grMode.add("radiobutton{text:'" + strSourceFiles + "'}"),
            rbLayers = grMode.add("radiobutton{text:'" + strSourceLayers + "'}"),
            grBrowse = pnSource.add("group{orientation: 'row', alignChildren: ['left', 'center'], spacing: 10, margins: 0}"),
            etSource = grBrowse.add('edittext {preferredSize: [400, -1], properties: {readonly: true}}'),
            bnSource = grBrowse.add("button {text:'" + strBnBrowse + "'}"),
            chSubfolder = pnSource.add("checkbox{text:'" + strSourceSubdir + "'}"),
            grFilter = pnSource.add("group{orientation: 'row', alignChildren: ['left', 'center'], spacing: 10, margins: 0}"),
            dlFilter = grFilter.add("dropdownlist{selection:0, preferredSize: [150, -1]}"),
            stFileFilter = grFilter.add("statictext{text:'" + strSourceFilterFiles + "'}"),
            pnList = w.add("panel{text:'" + strPnSearch + "',orientation:'column',alignChildren: ['fill', 'top'],spacing: 10,margins: [10, 15, 10, 10]}"),
            grList = pnList.add("group{orientation: 'column',alignChildren: ['left', 'fill'],spacing: 5,margins: 0 }"),
            grListButtons = grList.add("group{orientation: 'row', alignChildren: ['center', 'top'], spacing: 5, margins: 0}"),
            bnAddList = grListButtons.add("button{text:'" + strbnOpenList + "' }"),
            bnEditList = grListButtons.add("button{text:'" + strbnListEdit + "'}"),
            stDiv = grListButtons.add("statictext"),
            dlMode = grListButtons.add("dropdownlist", undefined, [strListModeText, strListModeHeaders]),
            grSymbols = grList.add("group{orientation: 'row', alignChildren: ['left', 'center'], spacing: 0, margins: 0}"),
            stSymbolsFilter = grSymbols.add("statictext{text:'" + strFilterSymbols + "'}"),
            ch1 = grSymbols.add("checkbox{text:'" + "а-Я" + "'}"),
            ch2 = grSymbols.add("checkbox{text:'" + "a-Z" + "'}"),
            ch3 = grSymbols.add("checkbox{text:'" + "0-9" + "'}"),
            ch4 = grSymbols.add("checkbox{text:'" + strDividerDot + "'}"),
            ch5 = grSymbols.add("checkbox{text:'" + strDividerComma + "'}"),
            ch6 = grSymbols.add("checkbox{text:'" + strFilterHyphen + "'}"),
            ch7 = grSymbols.add("checkbox{text:'" + strFilterHooks + "'}"),
            ch8 = grSymbols.add("checkbox{text:'" + strFilterOther + "'}"),
            grText = grList.add("group{orientation: 'row', alignChildren: ['left', 'fill'], spacing: 0, margins: 0}"),
            textList = grText.add("listbox{preferredSize: [500, 200]}"),
            grListAdditionalButtons = pnList.add("group{orientation: 'row', alignChildren: ['center', 'top'], spacing: 5, margins: 0}"),
            stDiv2 = grListAdditionalButtons.add("statictext"),
            dlDiv = grListAdditionalButtons.add("dropdownlist", undefined, [strDividerAuto, strDividerSemicolon, strDividerComma, strDividerTab, strDividerLine, strDividerSpace]),
            pnOptions = pnList.add("panel{text:'" + strPnPattern + "', orientation: 'column', alignChildren: ['fill', 'top'], spacing: 10, margins: [10, 15, 10, 10]}"),
            grPreset = pnOptions.add("group{orientation: 'row', alignChildren: ['left', 'center'], spacing: 10, margins: 0}"),
            stPreset = grPreset.add("statictext{text:'" + strPresetLabel + "'}"),
            dlPreset = grPreset.add("dropdownlist{selection:0, preferredSize: [200, -1]}"),
            grPresetButtons = grPreset.add("group{orientation: 'row', alignChildren: ['left', 'center'], spacing: 0, margins: 0}"),
            bnRefresh = grPresetButtons.add("button{text:'" + "↻" + "', helpTip:'" + strPresetRefresh + "',preferredSize: [30, -1]}"),
            bnSave = grPresetButtons.add("button{text:'" + "✔" + "', helpTip:'" + strPresetSave + "',preferredSize: [30, -1]}"),
            bnSaveAs = grPresetButtons.add("button{text:'" + "+" + "', helpTip:'" + strPresetAdd + "',preferredSize: [30, -1]}"),
            bnDel = grPresetButtons.add("button{text:'" + "×" + "', helpTip:'" + strPresetDelete + "',preferredSize: [30, -1]}"),
            pnDiv = pnOptions.add("panel{alignment:'fill'}"),
            grPattern = pnOptions.add("group{orientation: 'row', alignChildren: ['left', 'fill'], spacing: 10, margins: 0}"),
            grSearch = grPattern.add("group{orientation: 'column', alignChildren: ['fill', 'center'], spacing: 0, margins: 0}"),
            stSearch = grSearch.add("statictext{text:'" + strPatternSearch + "', preferredSize: [100, -1]}"),
            etSearch = grSearch.add('edittext{preferredSize: [120, -1]}'),
            grRename = grPattern.add("group{orientation: 'column', alignChildren: ['fill', 'center'], spacing: 0, margins: 0}"),
            stRename = grRename.add("statictext{text:'" + strPatternRename + "', preferredSize: [340, -1]}"),
            etRename = grRename.add('edittext'),
            grPatternButtons = pnOptions.add("group{orientation: 'row', alignChildren: ['center', 'center'], spacing: 0, margins: 0}"),
            bnWord = grPatternButtons.add("button{text:'" + "[" + cfg.word + "] " + strPatternColumn + "'}"),
            bnInterval = grPatternButtons.add("button{text:'" + "[" + cfg.interval + "] " + strPatternInterval + "'}"),
            bnFile = grPatternButtons.add("button{text:'" + '[N] ' + strPatternFile + "'}"),
            bnFolder = grPatternButtons.add("button{text:'" + "[P] " + strPatternFolder + "'}"),
            bnHeader = grPatternButtons.add("button{text:'" + "[H] " + strPatternHeader + "'}"),
            grPreview = pnOptions.add("group{orientation: 'row', alignChildren: ['left', 'center'], spacing: 5, margins: 0}"),
            grLabels = grPreview.add("group{orientation: 'column', alignChildren: ['right', 'center'], spacing: 5, margins: 0}"),
            stLabelSearch = grLabels.add("statictext{text:'" + strBnSearch + ":" + "'}"),
            stLabelRename = grLabels.add("statictext{text:'" + strPatternNewName + "'}"),
            grResult = grPreview.add("group{orientation: 'column', alignChildren: ['left', 'center'], spacing: 5, margins: 0}"),
            stPreviewSearch = grResult.add("statictext{preferredSize: [320, -1]}"),
            stPreviewRename = grResult.add("statictext{preferredSize: [320, -1]}"),
            grButtons = w.add("group{orientation: 'row', alignChildren: ['center', 'center'], spacing: 10, margins: 0}"),
            ok = grButtons.add("button{text:'" + strBnSearch + "'}"),
            cancel = grButtons.add("button{text:'" + strBnCancel + "'}");
    }
    dlMode.text = strListMode
    dlDiv.text = strDivider
    target = etRename
    {
        dlPreset.onChange = function () {
            bnDel.enabled = this.selection.index;
            cfg.preset = this.selection.text;
            if (renew) {
                this.selection.index == 0 ?
                    preset.putArrayToSettings(cfg, preset.putSettingsToArray(new Config)) :
                    preset.putArrayToSettings(cfg, preset.getPreset(this.selection.text));
                w.onShow(true);
            }
            if (w.visible) cfg.putScriptSettings(cfg)
            preset.checkPresetIntegrity(w)
        }
        bnSave.onClick = function () {
            preset.putPreset(dlPreset.selection.text, preset.putSettingsToArray(cfg), "save")
            preset.checkPresetIntegrity(w)
            cfg.putScriptSettings(cfg)
        }
        bnSaveAs.onClick = function () {
            var cur = preset.putSettingsToArray(cfg)
            nm = prompt(strPresetPromt, dlPreset.selection.text + strPresetCopy, strPresetNew);
            if (nm != null && nm != "") {
                if (preset.getPreset(nm) == "" && nm != strPresetDefailt) {
                    preset.putPreset(nm, cur, "add")
                    loadPresets()
                    renew = false;
                    dlPreset.selection = dlPreset.find(nm)
                    renew = true;
                } else {
                    if (nm != strPresetDefailt) {
                        if (confirm(localize(strErrPreset, nm), false, strPresetNew)) {
                            preset.putPreset(nm, cur, "save")
                            renew = false;
                            dlPreset.selection = dlPreset.find(nm)
                            renew = true;
                        }
                    }
                }
            }
            cfg.putScriptSettings(cfg)
            preset.checkPresetIntegrity(w)
        }
        bnDel.onClick = function () {
            var num = dlPreset.selection.index;
            preset.putPreset(dlPreset.selection.text, preset.putSettingsToArray(cfg), "delete")
            loadPresets()
            dlPreset.selection = num > dlPreset.items.length - 1 ? dlPreset.items.length - 1 : num
            cfg.putScriptSettings(cfg)
            preset.checkPresetIntegrity(w)
        }
        bnRefresh.onClick = function () { dlPreset.onChange() }
    }
    rbFiles.onClick = function () {
        changeGlobalMode(false)
        etSource.text = cfg.targetPath
        app.doProgress(strBnSearch, "enumFiles(Folder(fromBridge.folder ? fromBridge.folder : cfg.sourcePath))")
        checkButtonsState()
    }
    rbLayers.onClick = function () {
        changeGlobalMode(true)
        enumLayers(doc.getProperty('title'))
        checkButtonsState()
    }
    ch1.onClick = function () { filterSymbols(this, 'filterCyrillic') }
    ch2.onClick = function () { filterSymbols(this, 'filterLatin') }
    ch3.onClick = function () { filterSymbols(this, 'filterDigits') }
    ch4.onClick = function () { filterSymbols(this, 'filterDot') }
    ch5.onClick = function () { filterSymbols(this, 'filterComma') }
    ch6.onClick = function () { filterSymbols(this, 'filterColon') }
    ch7.onClick = function () { filterSymbols(this, 'filterBracket') }
    ch8.onClick = function () { filterSymbols(this, 'filterOther') }
    bnSource.onClick = function () {
        if (cfg.globalMode) {
            enumLayers(selectDocumentWindow());
        } else {
            var fol = new Folder(cfg.sourcePath)
            app.doProgress(strBnSearch, "enumFiles(fol.selectDlg())")
        }
        checkButtonsState()
    }
    bnAddList.onClick = function () {
        var fle = new File,
            result = readFile(fle, true)
        if (result != null) {
            sourceText = result
            dlMode.selection = null
            formattedText = buildList(sourceText)
            dlMode.selection = cfg.listMode
        }
        checkButtonsState()
    }
    bnEditList.onClick = function () {
        var sel = textList.selection != undefined ? textList.selection.index : -1,
            result = editList(sourceText, delimiter);
        if (result != null) {
            sourceText = result
            dlMode.onChange()
            textList.selection = sel >= textList.items.length ? textList.items.length - 1 : sel
            checkButtonsState()
        }
    }
    ok.onClick = function () {
        var result = searchWindow(formattedText.text, headers)
        if (result != null) {
            w.close();
            cfg.globalMode ?
                app.doForcedProgress(strBnSearchRename, 'renameLayers(result.found)') :
                app.doProgress(strBnSearchRename, "moveFiles(result.found)");
        }
    }
    cancel.onClick = function () { w.close(2) }
    dlMode.onChange = function () {
        if (this.selection == undefined) return;
        cfg.listMode = this.selection.index
        if (w.visible) preset.checkPresetIntegrity(w)
        formattedText = buildList(sourceText)
        var columns = 0,
            wordLen = {},
            text = formattedText.text.slice()
        for (var i = 0; i < text.length; i++) {
            if (text[i].length > columns) columns = text[i].length
            for (var n = 0; n < text[i].length; n++) {
                if (wordLen[n] == undefined) {
                    wordLen[n] = text[i][n]
                } else {
                    if (text[i][n].length >= wordLen[n].length) wordLen[n] = text[i][n]
                }
            }
        }
        var props = { numberOfColumns: columns, showHeaders: true, columnTitles: [], columnWidths: [] },
            shift = cfg.listMode ? -1 : 1
        sel = textList.selection != null ? textList.selection.index + shift : 0
        headers = []
        if (cfg.listMode && text.length > 0) {
            headers = text.shift()
            while (headers.length < columns) {
                headers.push("")
            }
        } else {
            for (var i = 0; i < columns; i++) {
                headers.push(String(i + 1))
            }
        }
        var h = headers.slice()
        if (cfg.listMode && text.length > 0) {
            for (var i = 0; i < columns; i++) {
                h[i] = i + 1 + ". " + h[i]
            }
        }
        for (var i = 0; i < columns; i++) {
            var wl = wordLen[i] + "###"
            props.columnTitles.push(h[i])
            props.columnWidths.push(textList.graphics.measureString(wl, textList.graphics.font).width)
        }
        grList.remove(grList.children[2])
        var grText = grList.add("group{orientation: 'row', alignChildren: ['left', 'fill'], spacing: 0, margins: 0}");
        textList = grText.add("listbox", [0, 0, 500, 200], undefined, props)
        textList.size.width = pnList.size.width - 25
        textList.onClick = function () {
            cfg.options = etSearch.text + '\n' + etRename.text
            if (this.selection != undefined) { previewList(formattedText.text[this.selection.index + cfg.listMode]) } else { stPreviewRename.text = stPreviewSearch.text = "" }
            checkButtonsState()
            preset.checkPresetIntegrity(w)
        }
        textList.onDoubleClick = function () {
            if (this.selection != undefined) {
                var sel = this.selection.index
                var result = editLine(sourceText[formattedText.ids[sel + cfg.listMode]], delimiter)
                if (result != null) {
                    sourceText[formattedText.ids[sel + cfg.listMode]] = result;
                    dlMode.onChange()
                    textList.selection = sel >= textList.items.length ? textList.items.length - 1 : sel
                    checkButtonsState()
                }
            }
        }
        textList.addEventListener('keyup', commonHandler)
        function commonHandler(evt) {
            textList.onClick()
        }
        for (var i = 0; i < text.length; i++) {
            var cur = text[i]
            textList.add("item", cur[0])
            for (var n = 1; n < cur.length; n++) {
                textList.items[i].subItems[n - 1].text = cur[n]
            }
        }
        w.layout.layout(true)
        sel = sel >= textList.items.length ? textList.items.length - 1 : sel
        sel = sel < 0 ? 0 : sel
        textList.selection = sel
        if (textList.selection != null) previewList(formattedText.text[sel + cfg.listMode])
    }
    dlDiv.onChange = function () {
        cfg.divider = this.selection.index
        if (renew) dlMode.onChange()
    }
    etRename.addEventListener('focus', eventHandler)
    etSearch.addEventListener('focus', eventHandler)
    bnWord.onClick = function () {
        var result = insertWord();
        if (result) target.textselection = result;
        this.text = '[' + cfg.word + '] ' + strPatternColumn
        textList.onClick();
        target.active = true
    }
    bnInterval.onClick = function () {
        var result = insertInterval();
        if (result) target.textselection = result;
        this.text = '[' + cfg.interval + '] ' + strPatternInterval
        textList.onClick();
        target.active = true
    }
    bnFile.onClick = function () { etRename.textselection = "[F]"; textList.onClick() }
    bnFolder.onClick = function () { etRename.textselection = "[P]"; textList.onClick() }
    bnHeader.onClick = function () { etRename.textselection = "[H]"; textList.onClick() }
    etRename.onChanging = function () { textList.onClick(); }
    etSearch.onChanging = function () { textList.onClick(); }
    dlFilter.onChange = function () {
        if (cfg.globalMode) {
            cfg.layerFilter = typesArray[this.selection.index]
        }
        else {
            cfg.fileFilter = typesArray[this.selection.index]
        }
    }
    chSubfolder.onClick = function () {
        if (cfg.globalMode) {
            grBrowse.enabled = !this.value
            cfg.useAllDocuments = this.value
            enumLayers(doc.getProperty('title'))
        }
        else {
            grBrowse.enabled = true
            if (etSource.text != '') enumFiles(Folder(cfg.sourcePath))
            cfg.useSubfolders = this.value;
        }
    }
    w.onShow = function (fromPreset) {
        renew = false
        if (!fromPreset) {
            etSource.size.width = pnSource.size.width - bnSource.size.width - 30
            textList.size.width = pnList.size.width - 20
            stDiv.size.width = pnList.size.width - bnAddList.size.width - bnEditList.size.width - dlMode.size.width - 35
            stDiv2.size.width = pnList.size.width - dlDiv.size.width - 25
            stRename.size.width = pnOptions.size.width - grSearch.size.width - 30
            dlPreset.size.width = pnOptions.size.width - grPresetButtons.size.width - stPreset.size.width - 40
            stPreviewRename.size.width = stPreviewSearch.size.width = pnOptions.size.width - grLabels.size.width - 35
            chSubfolder.size.width = etSource.size.width - dlFilter.size.width - stFileFilter.size.width - 20
            w.layout.layout(true)
            if (fromBridge.folder) cfg.globalMode = false
            if (!apl.getProperty('numberOfDocuments')) {
                cfg.globalMode = false
                rbLayers.enabled = false
            }
            if (!cfg.globalMode) {
                rbFiles.value = true
                rbFiles.onClick()
            } else {
                rbLayers.value = true;
                rbLayers.onClick()
            }
            loadPresets()
            dlPreset.selection = dlPreset.find(cfg.preset) != null ? dlPreset.find(cfg.preset) : 0
        }
        dlMode.selection = cfg.listMode
        dlDiv.selection = cfg.divider ? cfg.divider : 0
        etSearch.text = cfg.options.split('\n')[0]
        etRename.text = cfg.options.split('\n')[1]
        ch1.value = cfg.filterCyrillic == undefined ? 1 : cfg.filterCyrillic
        ch2.value = cfg.filterLatin == undefined ? 1 : cfg.filterLatin
        ch3.value = cfg.filterDigits == undefined ? 1 : cfg.filterDigits
        ch4.value = cfg.filterDot == undefined ? 1 : cfg.filterDot
        ch5.value = cfg.filterComma == undefined ? 1 : cfg.filterComma
        ch6.value = cfg.filterColon == undefined ? 1 : cfg.filterColon
        ch7.value = cfg.filterBracket == undefined ? 1 : cfg.filterBracket
        ch8.value = cfg.filterOther == undefined ? 1 : cfg.filterOther
        textList.onClick()
        renew = true
    }
    function eventHandler(evt) {
        target = evt.target
        bnFile.enabled = bnFolder.enabled = bnHeader.enabled = evt.target == etRename ? true : false
    }
    function changeGlobalMode(mode) {
        cfg.globalMode = mode
        chSubfolder.text = mode ? strSourceAllDocuments : strSourceSubdir;
        stFileFilter.text = mode ? strSourceFilterLayers : strSourceFilterFiles;
        bnFile.text = '[N] ' + (mode ? strPatternLayer : strPatternFile);
        bnFolder.text = '[P] ' + (mode ? strPatternDocument : strPatternFolder);
        dlFilter.removeAll();
        if (textList.onClick) textList.onClick();
        if (mode) {
            chSubfolder.value = cfg.useAllDocuments
            grBrowse.enabled = !cfg.useAllDocuments
        } else {
            chSubfolder.value = cfg.useSubfolders
            grBrowse.enabled = true
        }
    }
    function filterSymbols(obj, filter) {
        cfg[filter] = obj.value;
        dlMode.onChange();
    }
    function checkButtonsState() {
        ok.enabled = textList.items.length != 0 && etSource.text != "" && etSearch.text != "" ? true : false
    }
    function buildList(list) {
        var text = [],
            len = list.length,
            indexes = [];
        if (cfg.divider) {
            var sep = [null, ";", ",", "\t", "|", ' ']
            delimiter = sep[cfg.divider]
            for (var i = 0; i < len; i++) {
                var regExp = new RegExp('[' + delimiter + ']', 'g'),
                    line = formatLine(list[i]);
                line = line.replace(regExp, '\u001E')
                if (line != "") {
                    text.push(line.split('\u001E'))
                    indexes.push(i)
                }
            }
        } else {
            for (var i = 0; i < len; i++) {
                var line = formatLine(list[i])
                if (line != "") {
                    text.push(line)
                    indexes.push(i)
                }
            }
            var len = text.length
            delimiter = findDiv(text)
            for (var i = 0; i < len; i++) {
                var line = text[i]
                line = splitCSV(line, delimiter)
                text[i] = line.split('\u001E')
            }
        }
        var len = text.length
        for (var i = 0; i < len; i++) {
            var line = text[i]
            for (var x = 0; x < line.length; x++) {
                line[x] = line[x].replace(/ +$/, "")
                line[x] = line[x].replace(/^ +/, "")
            }
            text[i] = line
        }
        return { text: text, ids: indexes }
        function findDiv(list) {
            var sep = [";", ",", "\t", "|", " "],
                len = list.length,
                result = []
            for (var n = 0; n < 5; n++) {
                var cur = [],
                    sum = 0,
                    mid = 0,
                    dif = 0
                for (var i = 0; i < len; i++) {
                    if (list[i].length > 2) {
                        cur.push(splitCSV(list[i], sep[n]).split('\u001E').length)
                        sum += cur[cur.length - 1]
                    }
                }
                len = cur.length
                mid = sum / len
                if (mid > 1) {
                    var e = false
                    for (var i = 0; i < len; i++) {
                        if (cur[i] == 1) { e = true; break; }
                    }
                    if (!e) {
                        for (var i = 0; i < len; i++) {
                            dif += Math.pow(mid - cur[i], 2)
                        }
                        result.push({ div: sep[n], dif: dif / mid })
                    }
                }
            }
            if (result.length > 0) {
                result.sort(sortResult)
                return result[0].div
            }
            return " "
            function sortResult(a, b) { return a.dif >= b.dif ? 1 : -1 }
        }
    }
    function loadPresets() {
        var len = dlPreset.items.length
        for (var i = 0; i < len; i++) { dlPreset.remove(dlPreset.items[0]) }
        var items = preset.getPresetList()
        dlPreset.add('item', strPresetDefailt)
        for (var i = 0; i < items.length; i++) { dlPreset.add('item', items[i].key) }
    }
    function enumFiles(currentFolder) {
        if (currentFolder) {
            if (currentFolder.exists) {
                allFiles = {}
                cfg.sourcePath = etSource.text = currentFolder.fsName.toString()
                app.doProgress(strPatternSearch, "findAllFiles(cfg.sourcePath, allFiles, cfg.useSubfolders)")
                typesArray = buildShortcutList(allFiles);
                var len = typesArray.length;
                dlFilter.removeAll()
                var counter = 0;
                for (var i = 1; i < len; i++) {
                    var cur = allFiles[typesArray[i]].length
                    dlFilter.add("item", typesArray[i] + ' (' + cur + ')')
                    counter += cur;
                }
                dlFilter.add("item", typesArray[0] + ' (' + counter + ')', 0)
                dlFilter.selection = findTypeIndex(typesArray, cfg.fileFilter) != -1 ? findTypeIndex(typesArray, cfg.fileFilter) : 0
                if (w.visible || fromBridge.file || fromBridge.folder) {
                    if (allFiles["TXT"] != undefined || allFiles["CSV"] != undefined) {
                        allFiles["CSV"] == undefined ? [] : allFiles["CSV"]
                        allFiles["TXT"] == undefined ? [] : allFiles["TXT"]
                        allFiles["TXT"] = allFiles["TXT"] ? allFiles["TXT"].concat(allFiles["CSV"]) : allFiles["TXT"] = allFiles["CSV"]
                        var b = decodeURI(File(fromBridge.file).name).match(new RegExp("txt$|csv$", "i")) == null ? false : true
                        var result = b ? fromBridge.file : selectListWindow(allFiles["TXT"])
                        if (result != "") {
                            sourceText = readFile(File(result))
                            dlMode.selection = null
                            formattedText = buildList(sourceText)
                            dlMode.selection = cfg.listMode
                            fromBridge.file = ""
                        }
                    }
                }
                return true
            }
        }
        return false
    }
    function enumLayers(currentDocument) {
        etSource.text = doc.getProperty('title')
        if (currentDocument) {
            allFiles = {};
            var len = apl.getProperty('numberOfDocuments')
            cur = doc.getProperty('itemIndex');
            findAllLayers(allFiles, doc.getProperty('itemIndex'));
            if (cfg.useAllDocuments) {
                for (var i = 1; i <= len; i++) {
                    if (i == cur) continue;
                    findAllLayers(allFiles, doc.getProperty('itemIndex', i, true));
                }
            }
            typesArray = buildShortcutList(allFiles);
            var len = typesArray.length;
            dlFilter.removeAll()
            var counter = 0;
            for (var i = 1; i < len; i++) {
                var cur = allFiles[findTypeIndex(layerTypesArray, typesArray[i])].length;
                dlFilter.add("item", typesArray[i] + ' (' + cur + ')')
                if (typesArray[i] != layerTypesArray[5]) counter += cur;
            }
            dlFilter.add("item", typesArray[0] + ' (' + counter + ')', 0)
            dlFilter.selection = findTypeIndex(typesArray, cfg.layerFilter) != -1 ? findTypeIndex(typesArray, cfg.layerFilter) : 0
            if (cfg.globalMode && findTypeIndex(typesArray, layerTypesArray[5]) && allFiles[5].length > 1) dlFilter.selection = findTypeIndex(typesArray, layerTypesArray[5])
            return true
        }
        return false
    }
    function findTypeIndex(shortcuts, f) {
        for (var i = 0; i < shortcuts.length; i++) { if (shortcuts[i] == f) return i }
        return -1
    }
    function previewList(s) {
        if (cfg.globalMode) {
            var c = parseExpression(cfg.options.split('\n')[0], s, undefined, headers),
                e = parseExpression(cfg.options.split('\n')[1], s, File('%' + strPatternDocument + '%/%' + strPatternLayer + '%'), headers)
        } else {
            var c = parseExpression(cfg.options.split('\n')[0], s, undefined, headers),
                e = parseExpression(cfg.options.split('\n')[1], s, File('%' + strPatternFolder + '%/%' + strPatternFile + '%.jpg'), headers)
        }
        var search = [],
            rename = []
        for (var i = 0; i < c.length; i++) {
            search.push(c[i].text)
            if (e != "") rename.push(parseHeader(e, c[i].header))
        }
        stPreviewSearch.text = search.join(', ')
        stPreviewRename.text = rename.length == 0 ? e.replace(/\[H\]|[\[\]]/g, '') : rename.join(', ')
        stPreviewRename.helpTip = stPreviewRename.text.length > 70 ? stPreviewRename.text : ''
        stPreviewSearch.helpTip = stPreviewSearch.text.length > 70 ? stPreviewSearch.text : ''
    }
    function moveFiles(fileList) {
        var f = [];
        for (var i = 0; i < fileList.length; i++) { if (fileList[i].targetName) f.push(fileList[i]) }
        var len = f.length
        for (var i = 0; i < len; i++) {
            app.updateProgress(i + 1, len * 2)
            app.changeProgressText(f[i].targetName)
            f[i].sourceXMP = getXMPname(f[i].source.file)
            var source = File(f[i].source.file.fsName),
                target = File(f[i].target),
                targetParent = Folder(target.parent),
                sourceParent = Folder(source.parent),
                metadataName = decodeURI(source.name)
            if (targetParent.fsName != target.parent.fsName) { f[i].err = true; continue; }
            if (!source.exists) { f[i].err = true; continue; }
            if (!targetParent.exists) { if (!targetParent.create()) { f[i].err = true; continue; } }
            if (target.exists) { f[i].err = true; continue; }
            if (targetParent.fsName == sourceParent.fsName && cfg.move) {
                if (!hasSameSourceFile(f, f[i])) {
                    source.rename(decodeURI(target.name))
                    f[i].err = true
                } else {
                    if (!source.copy(target)) { f[i].err = true; continue; }
                }
            } else {
                if (!source.copy(target)) { f[i].err = true; continue; }
            }
            if (cfg.metadata) { nameToMetadata(target.fsName, metadataName) }
        }
        for (var i = 0; i < len; i++) {
            app.updateProgress(i + len + 1, len * 2)
            app.changeProgressText('')
            var source = f[i].sourceXMP
            if (source.exists && hasXMP(f[i].source.file)) {
                f[i].doXMP = true
                var target = getXMPname(f[i].target),
                    targetParent = Folder(target.parent),
                    sourceParent = Folder(source.parent)
                if (targetParent.fsName != target.parent.fsName) { f[i].XMPErr = true; continue; }
                if (target.exists) { f[i].XMPErr = true; continue; }
                if (targetParent.fsName == sourceParent.fsName && cfg.move) {
                    if (!hasSameSourceFile(f, f[i])) {
                        source.rename(decodeURI(target.name))
                        f[i].XMPErr = true
                    } else {
                        if (!source.copy(target)) { f[i].XMPErr = true; continue; }
                    }
                } else {
                    if (!source.copy(target)) { f[i].XMPErr = true; continue; }
                }
            }
        }
        if (cfg.move) {
            for (var i = 0; i < len; i++) {
                if (!f[i].err) f[i].source.file.remove()
                if (!f[i].XMPErr && f[i].doXMP) f[i].sourceXMP.remove()
            }
        }
        function hasSameSourceFile(p, f) {
            var len = p.length
            for (var i = 0; i < len; i++) {
                if (p[i].source.file.fsName == f.source.file.fsName && p[i] != f) return true
            }
            return false
        }
        function nameToMetadata(target, fileName) {
            try {
                if (ExternalObject.AdobeXMPScript == undefined) ExternalObject.AdobeXMPScript = new ExternalObject("lib:AdobeXMPScript")
                var xmpFile = new XMPFile(target, XMPConst.UNKNOWN, XMPConst.OPEN_FOR_UPDATE)
                var xmp = xmpFile.getXMP()
                xmp.setProperty(XMPConst.NS_XMP_MM, "PreservedFileName", fileName)
                if (xmpFile.canPutXMP(xmp)) xmpFile.putXMP(xmp)
                xmpFile.closeFile(XMPConst.CLOSE_UPDATE_SAFELY)
                return true
            } catch (e) {
            }
            return false
        }
        function getXMPname(fileName) {
            var f = decodeURI(fileName),
                lastDot = f.lastIndexOf(".")
            if (lastDot == -1) return f
            return File(f.substr(0, lastDot) + '.xmp')
        }
        function hasXMP(target) {
            try {
                if (ExternalObject.AdobeXMPScript == undefined) ExternalObject.AdobeXMPScript = new ExternalObject("lib:AdobeXMPScript")
                var xmpFile = new XMPFile(target.fsName, XMPConst.UNKNOWN, XMPConst.OPEN_FOR_READ)
                xmpFile.closeFile()
                return false
            } catch (e) { }
            return true
        }
    }
    function renameLayers(layersList) {
        var documents = [],
            len = apl.getProperty('numberOfDocuments');
        documents.push(doc.getProperty('documentID'));
        for (var i = 1; i <= len; i++) {
            var cur = doc.getProperty('documentID', i, true);
            if (cur != documents[0]) documents.push(cur)
        }
        documents.reverse()
        do {
            var cur = documents.shift();
            doc.selectDocument(cur);
            for (var i = 0; i < layersList.length; i++) {
                if (layersList[i] && layersList[i].targetName) {
                    if (layersList[i].source.parentID == cur) {
                        app.updateProgress(i + 1, layersList.length)
                        app.changeProgressText(layersList[i].targetName)
                        doc.renameLayer(layersList[i].source.id, layersList[i].targetName);
                        layersList[i] = null;
                    }
                }
            }
        } while (documents.length)
    }
    return w
}
function selectListWindow(s) {
    var selected = ""
    var w = new Window("dialog{text: '" + strMessage + "', orientation: 'column', alignChildren: ['fill', 'top']}"),
        stHelpTip = w.add("statictext", undefined, strSelectFileTip),
        list = w.add("listbox{preferredSize: [550, 75]}"),
        stAction = w.add("statictext", undefined, strSelectFileAction),
        grButtons = w.add("group{orientation: 'row', alignChildren: ['left', 'center'], spacing: 10, margins: 0}"),
        ok = grButtons.add("button", undefined, strbnOpenList, { name: "ok" }),
        cancel = grButtons.add("button", undefined, strBnCancel, { name: "cancel" });
    list.onDoubleClick = function () {
        var fle = File(list.selection.text)
        if (fle.exists) fle.execute()
    }
    cancel.onClick = function () { selected = ""; w.close() }
    list.onChange = function () {
        ok.enabled = list.selection != undefined ? true : false
        selected = list.selection != undefined ? list.selection.text : ""
    }
    w.onShow = function () {
        app.beep()
        for (var a in s) { if (s[a]) list.add("item", s[a].file.fsName) }
        list.selection = 0
    }
    w.show()
    return selected
}
function selectDocumentWindow() {
    var selected = ''
    var w = new Window("dialog{text: '" + strMessage + "', orientation: 'column', alignChildren: ['fill', 'top']}"),
        stHelpTip = w.add("statictext", undefined, strSelectDocumentTip),
        list = w.add("listbox{preferredSize: [550, 75]}"),
        stAction = w.add("statictext", undefined, strSelectDocumentAction),
        grButtons = w.add("group{orientation: 'row', alignChildren: ['left', 'center'], spacing: 10, margins: 0}"),
        ok = grButtons.add("button", undefined, strbnOpenList, { name: "ok" }),
        cancel = grButtons.add("button", undefined, strBnCancel, { name: "cancel" });
    cancel.onClick = function () { selected = ''; w.close() }
    ok.onClick = function () { doc.selectDocument(doc.getProperty('documentID', list.selection.index + 1, true)); w.close() }
    list.onChange = function () {
        if (list.selection) {
            ok.enabled = true
            selected = list.selection.text
        } else {
            ok.enabled = false
            selected = ''
        }
    }
    w.onShow = function () {
        var len = apl.getProperty('numberOfDocuments')
        for (var i = 1; i <= len; i++) list.add("item", doc.getProperty('title', i, true))
        list.selection = doc.getProperty('itemIndex') - 1
    }
    w.show()
    return selected
}
function insertWord() {
    var result = "",
        w = new Window("dialog{text: '" + strPatternInsert + ' ' + strPatternColumn + "', orientation: 'column', alignChildren: ['fill', 'top'], spacing: 10,margins: 16 }"),
        et = w.add('edittext'),
        g = w.add("group{orientation: 'row', alignChildren: ['left', 'center'], spacing: 10, margins: 0}"),
        ok = g.add("button", undefined, strPatternInsert, { name: "ok" }),
        cancel = g.add("button", undefined, strBnCancel, { name: "cancel" });
    et.text = cfg.word
    et.onChanging = function () { if (et.text.match(/[^\d]/)) et.text = et.text.replace(/[^\d]/, "") }
    ok.onClick = function () {
        result = et.text != "" ? "[" + et.text + "]" : ""
        if (result != "") cfg.word = et.text
        w.close()
    }
    cancel.onClick = function () { w.close(); result = "" }
    w.show();
    return result
}
function insertInterval() {
    var result = "",
        w = new Window("dialog{text: '" + strPatternInsert + ' ' + strPatternInterval + "', orientation: 'column', alignChildren: ['fill', 'top'], spacing: 10,margins: 16 }"),
        g1 = w.add("group{orientation: 'row', alignChildren: ['center', 'center'], spacing: 10, margins: 0}"),
        etFrom = g1.add('edittext{preferredSize: [50, -1]}'),
        st = g1.add("statictext{text:'-'}"),
        etTo = g1.add('edittext{preferredSize: [50, -1]}'),
        g = w.add("group{orientation: 'row', alignChildren: ['left', 'center'], spacing: 10, margins: 0}"),
        ok = g.add("button", undefined, strPatternInsert, { name: "ok" }),
        cancel = g.add("button", undefined, strBnCancel, { name: "cancel" });
    etFrom.text = cfg.interval.split('-')[0]
    etTo.text = cfg.interval.split('-')[1]
    etFrom.onChanging = function () { if (etFrom.text.match(/[^\d]/)) etFrom.text = etFrom.text.replace(/[^\d]/, "") }
    etTo.onChanging = function () { if (etTo.text.match(/[^\d]/)) etTo.text = etTo.text.replace(/[^\d]/, "") }
    ok.onClick = function () {
        result = etFrom.text != "" || etTo.text != "" ? "[" + etFrom.text + '-' + etTo.text + "]" : ""
        if (result != "") cfg.interval = etFrom.text + '-' + etTo.text
        w.close()
    }
    cancel.onClick = function () { w.close(); result = "" }
    w.show();
    return result
}
function searchWindow(s, h) {
    result = { found: [], notFound: [] }
    var w = new Window("dialog{text: '" + strBnSearch + "', orientation: 'column', alignChildren: ['fill', 'top'], spacing: 10,margins: 16 }"),
        pnResult = w.add("panel{text:'" + strSearchFounded + 0 + "', orientation: 'column', alignChildren: ['fill', 'top'], spacing: 10, margins:[10, 15, 10, 10]}"),
        list1 = pnResult.add("listbox{preferredSize: [700, 250]}"),
        st = pnResult.add("statictext", undefined, strSearchNotFound + 0),
        list2 = pnResult.add("listbox{preferredSize: [-1, 100]}")
    if (!cfg.globalMode) {
        var chMetadata = pnResult.add("checkbox", undefined, strSearchMetadata, { name: "chMetadata" }),
            pnTarget = w.add("panel{text:'" + strPnTarget + "', orientation: 'column', alignChildren: ['left', 'top'], spacing: 10, margins:[10, 15, 10, 10]}"),
            chSourceAsTarget = pnTarget.add("checkbox{text: '" + strSearchSourceAsTarget + "'}"),
            grTarget = pnTarget.add("group{orientation: 'row', alignChildren: ['left', 'center'], spacing: 10, margins: 0}"),
            etTarget = grTarget.add('edittext {preferredSize: [600, -1], properties: {readonly: true}}'),
            bnTarget = grTarget.add("button{text:'" + strBnBrowse + "'}"),
            chMove = pnTarget.add("checkbox{text:'" + strSearchMove + "'}"),
            chDuplicates = pnTarget.add("checkbox{text:'" + strSearchDuplicates + "'}")
        bnTarget.onClick = function () {
            var target = new Folder(cfg.targetPath),
                fol = target.selectDlg()
            if (fol) {
                if (fol.exists) {
                    cfg.targetPath = etTarget.text = fol.fsName.toString()
                    renewList()
                }
            }
        }
        chSourceAsTarget.onClick = function () {
            cfg.useSameFolder = this.value
            etTarget.enabled = bnTarget.enabled = !this.value
            if (this.value) {
                etTarget.text = cfg.sourcePath
            } else {
                cfg.targetPath = etTarget.text = cfg.sourcePath
            }
            if (cfg.targetPath != cfg.sourcePath) renewList()
        }
        chDuplicates.onClick = function () {
            cfg.duplicates = this.value
            renewList()
        }
        chMove.onClick = function () { cfg.move = this.value }
        chMetadata.onClick = function () { cfg.metadata = this.value }
    }
    var grButtons = w.add("group{orientation: 'row', alignChildren: ['center', 'center'], spacing: 10, margins: 0}"),
        ok = grButtons.add("button", undefined, strBnSearchRename, { name: "ok" }),
        cancel = grButtons.add("button", undefined, strBnCancel, { name: "cancel" });
    list1.onDoubleClick = function () {
        fle = File(result.found[list1.selection.index].source.file)
        if (fle.exists) fle.execute()
    }
    ok.onClick = function () { w.close() }
    cancel.onClick = function () { result = null; w.close() }
    w.onShow = function () {
        if (cfg.globalMode) {
            findLayer(s, h, allFiles, cfg.layerFilter, result)
        } else {
            chMove.value = cfg.move
            chSourceAsTarget.value = cfg.useSameFolder
            etTarget.enabled = bnTarget.enabled = !chSourceAsTarget.value
            chMetadata.value = cfg.metadata
            chDuplicates.value = cfg.duplicates
            if (cfg.useSameFolder) {
                etTarget.text = cfg.targetPath = cfg.sourcePath
            } else {
                if (Folder(cfg.targetPath).exists) {
                    etTarget.text = cfg.targetPath
                } else {
                    cfg.targetPath = etTarget.text = cfg.sourcePath
                }
            }
            for (var a in allFiles) { if (a) break; }
            if (!a) {
                allFiles = {}
                app.doProgress(strPatternSearch, "findAllFiles(cfg.sourcePath, allFiles, cfg.useSubfolders)")
            }
            app.doProgress("", "findFile (s, h, allFiles, cfg.fileFilter, result)")
        }
        renewList()
    }
    w.show();
    return result
    function findFile(s, headers, files, filter, result) {
        var listLen = s.length,
            searchTemplate = cfg.options.split('\n')[0],
            renameTemplate = cfg.options.split('\n')[1],
            found = [],
            notFound = []
        for (var i = 0 + cfg.listMode; i < listLen; i++) {
            app.updateProgress(i + 1, listLen)
            app.changeProgressText(s[i].join(' '))
            var curSearch = parseExpression(searchTemplate, s[i], undefined, headers)
            if (curSearch.length) {
                for (var n = 0; n < curSearch.length; n++) {
                    var currentResult = []
                    for (a in files) {
                        if (files[a][0] != undefined && a != "TXT" && a != "CSV" && a != "XMP") {
                            if (a == filter || filter == strSourceAllFiles.ru || filter == strSourceAllFiles.en) {
                                var filesLength = files[a].length
                                for (var z = 0; z < filesLength; z++) {
                                    search = files[a][z].uCaseName.indexOf(curSearch[n].text.toUpperCase())
                                    if (search != -1) {
                                        var c = parseHeader(parseExpression(renameTemplate, s[i], files[a][z].file, headers), curSearch[n].header)
                                        currentResult.push({ source: files[a][z], newName: c, index: files[a][z].uCaseName.length - curSearch[n].text.length })
                                    }
                                }
                            }
                        }
                    }
                    if (currentResult.length > 0) {
                        currentResult.sort(sortFiles)
                        found.push(currentResult[0])
                    } else {
                        notFound.push({ name: s[i].join(' '), search: curSearch[n].text })
                    }
                }
            } else {
                notFound.push({ name: s[i].join(' '), search: "" })
            }
        }
        result.found = found
        result.notFound = notFound
        return
        function sortFiles(a, b) { return a.index >= b.index ? 1 : -1 }
    }
    function generateSavePaths(f) {
        var len = f.length,
            targetPath = cfg.useSameFolder ? cfg.sourcePath : cfg.targetPath;
        if (len > 100) {
            var progress = progressWindow(strSearchRefresh, 3)
            progress.show();
        }
        for (var i = 0; i < f.length; i++) f[i].targetName = f[i].newName;
        if (len > 100) progress.updateProgress('')
        if (!cfg.duplicates) {
            for (var i = 0; i < len; i++) {
                for (var x = i + 1; x < len; x++) {
                    if (!f[x].targetName) continue;
                    if (f[i].source.file == f[x].source.file) {
                        var cur = f[x].targetName.replace(new RegExp(' ?' + f[x].source.name + ' ?', 'g'), '');
                        cur = cur.replace(new RegExp(' ?' + decodeURI(f[x].source.file.parent).split('/').reverse()[0] + ' ?', 'g'), '');
                        f[i].targetName = f[i].targetName + (cur.length ? ', ' + cur : '');
                        f[x].targetName = null;
                    }
                }
            }
        }
        if (len > 100) progress.updateProgress('')
        for (var i = 0; i < len; i++) {
            if (!f[i].targetName) continue;
            f[i].target = File(targetPath + '/' + f[i].targetName + '.' + f[i].source.ext).fsName
        }
        if (len > 100) progress.updateProgress('')
        for (var i = 0; i < len; i++) {
            if (!f[i].targetName) continue;
            f[i].target = createUniqueFileName(f, f[i])
        }
        if (len > 100) progress.close();
        function progressWindow(title, max) {
            var w = new Window('palette', title),
                bar = w.add('progressbar', undefined, 0, max);
            bar.preferredSize = [350, 20]
            w.updateProgress = function () {
                bar.value++;
                w.update();
            }
            return w;
        }
    }
    function generateLayerNames(f) {
        var len = f.length;
        for (var i = 0; i < f.length; i++) f[i].targetName = f[i].newName;
        for (var i = 0; i < len; i++) {
            for (var x = i + 1; x < len; x++) {
                if (!f[x].targetName) continue;
                if (f[i].source.id == f[x].source.id) {
                    var cur = f[x].targetName.replace(new RegExp(' ?' + f[x].source.name + ' ?', 'g'), '');
                    cur = cur.replace(new RegExp(' ?' + f[x].source.parentName + ' ?', 'g'), '');
                    f[i].targetName = f[i].targetName + (cur.length ? ', ' + cur : '');
                    f[x].targetName = null;
                }
            }
        }
    }
    function createUniqueFileName(folder, file) {
        var inParentPath = decodeURI(File(file.target).parent),
            inFileName = file.targetName.replace(/ +$/, ''),
            inFileExt = file.source.ext,
            fileNumber = 1,
            uniqueFileName = File(inParentPath + '/' + inFileName + '.' + inFileExt).fsName;
        while (pathExists(folder, file, uniqueFileName)) {
            uniqueFileName = File(inParentPath + '/' + inFileName + " (" + fileNumber + ').' + inFileExt).fsName
            fileNumber++;
        }
        return uniqueFileName
        function pathExists(fld, fle, cur) {
            for (var i = 0; i < fld.length; i++) {
                if (File(cur).exists) return true
                if (fld[i] != fle && fld[i].target == cur) return true
            }
            return false
        }
    }
    function findLayer(s, headers, layers, filter, result) {
        var listLen = s.length,
            searchTemplate = cfg.options.split('\n')[0],
            renameTemplate = cfg.options.split('\n')[1],
            found = [],
            notFound = []
        for (var i = 0 + cfg.listMode; i < listLen; i++) {
            var curSearch = parseExpression(searchTemplate, s[i], undefined, headers)
            if (curSearch.length) {
                for (var n = 0; n < curSearch.length; n++) {
                    var currentResult = []
                    for (a in layers) {
                        if (layers[a][0] != undefined && a != 5) {
                            if (layerTypesArray[a] == filter || filter == strSourceAllLayers.ru || filter == strSourceAllLayers.en) {
                                var filesLength = layers[a].length
                                for (var z = 0; z < filesLength; z++) {
                                    search = layers[a][z].uCaseName.indexOf(curSearch[n].text.toUpperCase())
                                    if (search != -1) {
                                        var c = parseHeader(parseExpression(renameTemplate, s[i], layers[a][z].file, headers), curSearch[n].header)
                                        currentResult.push({ source: layers[a][z], newName: c, index: layers[a][z].uCaseName.length - curSearch[n].text.length })
                                    }
                                }
                            }
                        }
                    }
                    if (currentResult.length > 0) {
                        currentResult.sort(sortFiles)
                        found.push(currentResult[0])
                    } else {
                        notFound.push({ name: s[i].join(' '), search: curSearch[n].text })
                    }
                }
            } else {
                notFound.push({ name: s[i].join(' '), search: "" })
            }
        }
        result.found = found
        result.notFound = notFound
        return
        function sortFiles(a, b) { return a.index >= b.index ? 1 : -1 }
    }
    function renewList() {
        list1.removeAll()
        list2.removeAll()
        if (!cfg.globalMode) {
            generateSavePaths(result.found)
            for (var i = 0; i < result.found.length; i++) { if (result.found[i].targetName) list1.add("item", result.found[i].source.file.fsName + " -> " + result.found[i].target) }
            for (var i = 0; i < result.notFound.length; i++) { list2.add("item", (result.notFound[i].search ? "*" + result.notFound[i].search + "* -> " : "") + result.notFound[i].name) }
        } else {
            generateLayerNames(result.found)
            for (var i = 0; i < result.found.length; i++) { if (result.found[i].targetName) list1.add("item", result.found[i].source.parentName + ': ' + result.found[i].source.name + " -> " + result.found[i].targetName) }
            for (var i = 0; i < result.notFound.length; i++) { list2.add("item", (result.notFound[i].search ? "*" + result.notFound[i].search + "* -> " : "") + result.notFound[i].name) }
        }
        pnResult.text = strSearchFounded + list1.items.length
        st.text = strSearchNotFound + list2.items.length
        ok.enabled = list1.items.length > 0 ? true : false
    }
}
function editList(s, div) {
    var output = ''
    div = div == ' ' ? strDividerSpace : div
    div = div == '\t' ? "TAB" : div
    var w = new Window("dialog");
    w.text = strEditList;
    w.orientation = "column";
    w.alignChildren = ["fill", "top"];
    var text = w.add("edittext {properties: {multiline: true, scrollable: true}}")
    text.preferredSize.width = 550;
    text.preferredSize.height = 200;
    if (s.length > 0) {
        var stDiv = w.add("statictext");
        stDiv.preferredSize.width = 300;
        stDiv.text = strDivider + " \"" + div + "\""
    }
    var grButtons = w.add("group");
    grButtons.orientation = "row";
    grButtons.alignChildren = ["center", "center"];
    grButtons.spacing = 10;
    grButtons.margins = 0;
    var ok = grButtons.add("button", undefined, strPresetSave);
    var cancel = grButtons.add("button", undefined, strBnCancel, { name: "cancel" });
    ok.onClick = function () { output = text.text.split('\n'); w.close() }
    cancel.onClick = function () { output = null; w.close() }
    w.onShow = function () {
        text.active = true
        text.text = s.join('\n')
    }
    w.show()
    return output
}
function editLine(s, div) {
    var output = ""
    div = div == ' ' ? strDividerSpace : div
    div = div == '\t' ? "TAB" : div
    var w = new Window("dialog");
    w.text = strListEditLine
    w.orientation = "column";
    w.alignChildren = ["fill", "top"];
    var text = w.add("edittext")
    text.preferredSize.width = 550;
    var stDiv = w.add("statictext");
    stDiv.preferredSize.width = 300;
    stDiv.text = strDivider + " \"" + div + "\""
    var grButtons = w.add("group");
    grButtons.orientation = "row";
    grButtons.alignChildren = ["center", "center"];
    grButtons.spacing = 10;
    grButtons.margins = 0;
    var ok = grButtons.add("button", undefined, strPresetSave, { name: "ok" });
    var cancel = grButtons.add("button", undefined, strBnCancel, { name: "cancel" });
    ok.onClick = function () { output = text.text; w.close() }
    cancel.onClick = function () { output = null; w.close() }
    w.onShow = function () {
        text.active = true
        text.text = s
    }
    w.show()
    return output
}
function findAllFiles(srcFolder, fileObj, useSubfolders) {
    var fileFolderArray = Folder(srcFolder).getFiles();
    var subfolderArray = []
    for (var i = 0; i < fileFolderArray.length; i++) {
        var fileFoldObj = fileFolderArray[i];
        if (fileFoldObj instanceof File) {
            if (!fileFoldObj.hidden) putFileToTypeObject(fileFoldObj, fileObj)
        } else if (useSubfolders) {
            subfolderArray.push(fileFoldObj)
        }
    }
    if (useSubfolders) {
        for (var i = 0; i < subfolderArray.length; i++) findAllFiles(subfolderArray[i], fileObj, useSubfolders)
    }
}
function findAllLayers(lrsObj, idx) {
    var doc = new AM('document'),
        lr = new AM('layer'),
        from = doc.getProperty('hasBackgroundLayer', idx, true) ? 0 : 1,
        to = doc.getProperty('numberOfLayers', idx, true);
    for (var i = from; i <= to; i++) {
        var kind = layerKindArray[lr.getProperty('layerKind', i, true, idx, 'document')];
        if (!lrsObj[kind]) lrsObj[kind] = [];
        var nm = lr.getProperty('name', i, true, idx, 'document'),
            parent = doc.getProperty('title', idx, true).replace(/\.\S+$/, "");
        lrsObj[kind].push({
            name: nm,
            uCaseName: nm.toUpperCase(),
            id: lr.getProperty('layerID', i, true, idx, 'document'),
            parentID: doc.getProperty('documentID', idx, true),
            parentName: parent,
            file: new File(parent + '/' + nm)
        })
    }
    var targetLayers = doc.getProperty('targetLayers', idx, true);
    if (targetLayers.count) {
        if (!lrsObj[5]) lrsObj[5] = [];
        for (var i = 0; i < targetLayers.count; i++) {
            var index = targetLayers.getReference(i).getIndex() + from,
                nm = lr.getProperty('name', index, true, idx, 'document'),
                parent = doc.getProperty('title', idx, true).replace(/\.\S+$/, "");
            lrsObj[5].push({
                name: nm,
                uCaseName: nm.toUpperCase(),
                id: lr.getProperty('layerID', index, true, idx, 'document'),
                parentID: doc.getProperty('documentID', idx, true),
                parentName: parent,
                file: new File(parent + '/' + nm)
            })
        }
    }
    b = 0
}
function putFileToTypeObject(fileName, fileObj) {
    var f = fileName.fsName.toString().toUpperCase()
    var lastDot = f.lastIndexOf(".")
    if (lastDot == -1) return false
    var ext = f.substr(lastDot + 1, f.length - lastDot),
        un = decodeURI(File(f).name),
        n = decodeURI(fileName.name),
        e = fileName.fsName.substr(lastDot + 1, fileName.fsName.length - lastDot)
    un = un.substr(0, un.length - (f.length - lastDot))
    n = n.substr(0, n.length - (fileName.fsName.length - lastDot))
    if (!fileObj.hasOwnProperty(ext)) fileObj[ext] = []
    fileObj[ext].push({ file: fileName, uCaseName: un, name: n, ext: e })
}
function buildShortcutList(fileObj) {
    var output = [cfg.globalMode ? strSourceAllLayers : strSourceAllFiles]
    for (a in fileObj) {
        if (fileObj[a][0] != undefined && a != "TXT" && a != "CSV" && a != "XMP" && a != 6) output.push(cfg.globalMode ? layerTypesArray[a] : a)
    }
    return output
}
function parseExpression(e, s, f, h) {
    if (s == undefined) return ''
    if (e == '') e = "[N]"
    if (!cfg.globalMode) {
        e = e.replace(/[:*\?\"\<\>\|\#]/g, "_")
        if ($.os.search(/windows/i) == -1) {
            e = e.replace(/\\|\/+/g, "/")
            e = e.replace(/\/$|^\//, '')
        } else {
            e = e.replace(/\/|\\+/g, "\\")
            e = e.replace(/\\$|^\\/, '')
        }
    }
    if (f == undefined) e = e.replace(/[\/\\]/g, '')
    var searchResult = [],
        line = s.slice()
    var a = e.match(/\[\d+\]/g),
        len = a ? a.length : 0
    if (f) {
        for (var i = 0; i < len; i++) {
            a[i] = getValue(a[i])
            e = e.replace(buildRegExp(a[i], "g"), getWord(a[i], line))
        }
    } else {
        for (var i = 0; i < len; i++) {
            a[i] = getValue(a[i])
            e = e.replace(buildRegExp(a[i], "g"), getWord(a[i], line))
        }
        if (len && !e.match(/\[\d*-\d*\]/g)) searchResult.push({ text: e, header: h })
    }
    if (f) {
        a = e.match(/\[N\]/g)
        len = a ? a.length : 0
        for (var i = 0; i < len; i++) {
            var fle = decodeURI(f.name).replace(/\.\S+$/, "")
            e = e.replace(buildRegExp(a[i]), fle)
        }
        a = e.match(/\[P\]/g)
        len = a ? a.length : 0
        for (var i = 0; i < len; i++) {
            var fle = decodeURI(f.parent.name)
            if (fle == undefined) fle = ''
            e = e.replace(buildRegExp(a[i]), fle)
        }
    }
    a = e.match(/\[\d*-\d*\]/g)
    len = a ? a.length : 0
    if (f) {
        for (var i = 0; i < len; i++) {
            a[i] = getValue(a[i])
            e = e.replace(buildRegExp(a[i]), getInterval(a[i], line))
        }
    } else {
        for (var i = 0; i < len; i++) {
            a[i] = getValue(a[i])
            var t = getInterval(a[i], line, true)
            for (var n = 0; n < t.length; n++) {
                var c = e.replace(buildRegExp(a[i]), getWord(t[n], line)).replace(/\[\d+\]|\[\d*-\d*\]|\[F\]|\[P\]|\[H\]/g, '').replace(/[\[\]]/g, ''),
                    r = getSearchObj(t[n], c, h)
                if (r.text) searchResult.push(r)
            }
            e = e.replace(buildRegExp(a[i]), '')
        }
    }
    return f ? e : searchResult
    function getWord(e, s) {
        var i = Number(e) - 1,
            t = s[i] ? s[i] : ''
        return t
    }
    function getInterval(e, s, searchMode) {
        var tmp = e.split('-'),
            from = tmp[0] != '' ? Number(tmp[0]) - 1 : 0,
            to = tmp[1] != '' ? Number(tmp[1]) - 1 : s.length,
            c = [];
        if (to >= from) {
            for (var i = from; i <= to; i++) {
                if (searchMode ? i + 1 : s[i]) c.push(searchMode ? i + 1 : s[i])
            }
        } else {
            for (var i = from; i >= to; i--) {
                if (searchMode ? i + 1 : s[i]) c.push(searchMode ? i + 1 : s[i])
            }
        }
        if (searchMode) return c
        return c.length ? c.join(' ') : ''
    }
    function getSearchObj(e, s, h) {
        var i = Number(e) - 1,
            h = h[i] ? h[i] : ''
        return { text: s, header: h }
    }
    function buildRegExp(r, options) {
        options = options != undefined ? options : ''
        return new RegExp('\\[' + r + '\\]', options)
    }
    function getValue(s) {
        return s.replace(/[\[\]]/g, '')
    }
}
function parseHeader(s, c) {
    if (s.match(/\[H\]/) == null) return s.replace(/[\[\]]/g, '')
    return s.replace(/\[H\]/g, c).replace(/[\[\]]/g, '')
}
function Config() {
    this.globalMode = false
    this.sourcePath = ""
    this.useSubfolders = true
    this.useAllDocuments = false
    this.fileFilter = ""
    this.layerFilter = ""
    this.options = "[3-]\n[N] [1-2]"
    this.word = "1"
    this.interval = "1-2"
    this.useSameFolder = true
    this.move = false
    this.targetPath = ""
    this.preset = ""
    this.metadata = true
    this.listMode = 0
    this.divider = 0
    this.filterCyrillic = true
    this.filterLatin = true
    this.filterDigits = true
    this.filterDot = true
    this.filterComma = true
    this.filterColon = true
    this.filterBracket = true
    this.filterOther = true
    this.duplicates = true
    this.getScriptSettings = function (settingsObj) {
        var f = new File(app.preferencesFolder + "/" + strMessage + ".desc"),
            d = new ActionDescriptor();
        try {
            if (f.exists) {
                f.open('r')
                f.encoding = 'BINARY'
                var s = f.read()
                f.close();
                d.fromStream(s);
            }
        } catch (e) { alert(e, '', 1) }
        if (d.count) descriptorToObject(settingsObj, d)
        function descriptorToObject(o, d, s) {
            var l = d.count;
            for (var i = 0; i < l; i++) {
                var k = d.getKey(i);
                var t = d.getType(k);
                strk = app.typeIDToStringID(k);
                switch (t) {
                    case DescValueType.BOOLEANTYPE:
                        o[strk] = d.getBoolean(k);
                        break;
                    case DescValueType.STRINGTYPE:
                        o[strk] = d.getString(k);
                        break;
                    case DescValueType.INTEGERTYPE:
                        o[strk] = d.getDouble(k);
                        break;
                }
            }
        }
    }
    this.putScriptSettings = function (settingsObj) {
        var d = objectToDescriptor(settingsObj),
            f = new File(app.preferencesFolder + "/" + strMessage + ".desc");
        try {
            f.open('w')
            f.encoding = 'BINARY'
            f.write(d.toStream())
            f.close()
        } catch (e) { alert(e, '', 1) }
        function objectToDescriptor(o, s) {
            var d = new ActionDescriptor;
            var l = o.reflect.properties.length;
            for (var i = 0; i < l; i++) {
                var k = o.reflect.properties[i].toString();
                if (k == "__proto__" || k == "__count__" || k == "__class__" || k == "reflect") continue;
                var v = o[k];
                k = app.stringIDToTypeID(k);
                switch (typeof (v)) {
                    case "boolean": d.putBoolean(k, v); break;
                    case "string": d.putString(k, v); break;
                    case "number": d.putInteger(k, v); break;
                }
            }
            return d;
        }
    }
}
function readFile(fle, showDialog) {
    var output = []
    if (showDialog) {
        if ($.os.match(/win/i) != null) {
            fle = File.openDialog(strBnAddList, "*.txt;*.csv", false)
        } else {
            fle = File.openDialog(strBnAddList, function (f) {
                return f.fsName.match(/\.(txt|csv)$/i);
            }, true);
            if (fle.length > 0) fle = fle[0]
        }
    }
    if (fle) {
        fle.open("r");
        do {
            var line = fle.readln()
            if (line != "") output.push(line)
        } while (!fle.eof)
        fle.close
    } else return null
    return output
}
function splitCSV(strData, strDelimiter) {
    strDelimiter = (strDelimiter);
    var objPattern = new RegExp(
        (
            "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
            "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
            "([^\"\\" + strDelimiter + "\\r\\n]*))"
        ),
        "gi"
    );
    var arrData = [];
    var arrMatches = null;
    while (arrMatches = objPattern.exec(strData)) {
        var strMatchedDelimiter = arrMatches[1];
        if (strMatchedDelimiter != undefined) {
            if (
                strMatchedDelimiter.length &&
                strMatchedDelimiter !== strDelimiter
            ) {
                arrData.push();
            }
        }
        var strMatchedValue;
        if (arrMatches[2]) {
            strMatchedValue = arrMatches[2].replace(
                new RegExp("\"\"", "g"),
                "\""
            );
        } else {
            strMatchedValue = arrMatches[3];
        }
        arrData.push(strMatchedValue);
    }
    return (arrData.join('\u001E'));
}
function joinCSV(strData, strDelimiter) {
    var len = strData.length
    for (var i = 0; i < len; i++) {
        strData[i] = strData[i].replace(/\"/g, "\"\"")
        var reg = new RegExp("[\n\r\"" + strDelimiter + "]", "g")
        if (strData[i].match(reg)) {
            strData[i] = "\"" + strData[i] + "\""
        }
    }
    return strData.join(strDelimiter)
}
function formatLine(s) {
    if (!cfg.filterCyrillic) s = s.replace(/[а-яё]/ig, " ")
    if (!cfg.filterLatin) s = s.replace(/[a-z]/ig, " ")
    if (!cfg.filterDigits) s = s.replace(/[\d]/g, " ")
    if (!cfg.filterDot) s = s.replace(/[.]/g, " ")
    if (!cfg.filterComma) s = s.replace(/[,]/g, " ")
    if (!cfg.filterColon) s = s.replace(/[-]/g, " ")
    if (!cfg.filterBracket) s = s.replace(/[()]/g, " ")
    if (!cfg.filterOther) s = s.replace(/[^)(,.\-a-zа-яё\d ]/ig, " ")
    if (!cfg.filterOther) s = s.replace(/[:\/*\?\<\>\|\#\[\]\\]/g, " ")
    s = s.replace(/ +/g, " ")
    s = s.replace(/ +$/, "")
    s = s.replace(/^ +/, "")
    return s
}
function Preset() {
    var s2t = stringIDToTypeID,
        t2s = typeIDToStringID;
    this.putPreset = function (key, val, mode) {
        var output = this.getPresetList()
        switch (mode) {
            case "add":
                output.push({ key: key, val: val })
                break;
            case "save":
                for (var i = 0; i < output.length; i++) {
                    if (output[i].key == key) { output[i].val = val; break; }
                }
                break;
            case "delete":
                for (var i = 0; i < output.length; i++) {
                    if (output[i].key == key) { output.splice(i, 1); break; }
                }
                break;
        }
        app.eraseCustomOptions('FileCollector')
        var d = new ActionDescriptor();
        for (var i = 0; i < output.length; i++) { d.putString(s2t(output[i].key), output[i].val) }
        app.putCustomOptions('FileCollector', d);
    }
    this.getPreset = function (key) {
        try {
            var d = app.getCustomOptions('FileCollector');
            return d.getString(s2t(key))
        } catch (e) { return "" }
    }
    this.getPresetList = function () {
        var output = []
        try {
            var d = app.getCustomOptions('FileCollector');
            for (var i = 0; i < d.count; i++) { output.push({ key: t2s(d.getKey(i)), val: d.getString(d.getKey(i)) }) }
        } catch (e) { }
        return output.sort(sortPresets)
    }
    function sortPresets(a, b) {
        if (a.key >= b.key) { return 1 } else { return -1 }
    }
    this.checkPresetIntegrity = function (window) {
        var dlPreset = window.children[1].children[2].children[0].children[1],
            bnRefresh = window.children[1].children[2].children[0].children[2].children[0],
            bnSave = window.children[1].children[2].children[0].children[2].children[1]
        if (dlPreset.selection.index > 0) {
            var cur = preset.putSettingsToArray(cfg)
            var old = preset.getPreset(dlPreset.selection.text)
            bnRefresh.enabled = bnSave.enabled = cur == old ? false : true
        } else { bnSave.enabled = false; bnRefresh.enabled = true }
    }
    this.putSettingsToArray = function (s) {
        var arr = [s.options, s.mode]
        return arr.join('\v')
    }
    this.putArrayToSettings = function (s, arr) {
        var a = arr.split('\v')
        s.options = String(a[0])
        s.mode = a[1] ? Number(a[1]) : 0
    }
}
function AM(target, order) {
    var s2t = stringIDToTypeID,
        t2s = typeIDToStringID;
    target = target ? s2t(target) : null;
    this.getProperty = function (property, id, idxMode, parentIdx, parentClass) {
        property = s2t(property);
        var r = new ActionReference();
        r.putProperty(s2t('property'), property);
        id != undefined ? (idxMode ? r.putIndex(target, id) : r.putIdentifier(target, id)) :
            r.putEnumerated(target, s2t('ordinal'), order ? s2t(order) : s2t('targetEnum'));
        if (parentIdx) r.putIndex(s2t(parentClass), parentIdx)
        return getDescValue(executeActionGet(r), property)
    }
    this.hasProperty = function (property, id, idxMode) {
        property = s2t(property);
        (r = new ActionReference()).putProperty(s2t('property'), property);
        id ? (idxMode ? r.putIndex(target, id) : r.putIdentifier(target, id))
            : r.putEnumerated(target, s2t('ordinal'), order ? s2t(order) : s2t('targetEnum'));
        return executeActionGet(r).hasKey(property)
    }
    this.descToObject = function (d) {
        var o = {}
        for (var i = 0; i < d.count; i++) {
            var k = d.getKey(i)
            o[t2s(k)] = getDescValue(d, k)
        }
        return o
    }
    this.selectDocument = function (id) {
        (r = new ActionReference()).putIdentifier(target, id);
        (d = new ActionDescriptor()).putReference(s2t('null'), r);
        executeAction(s2t('select'), d, DialogModes.NO)
    }
    this.renameLayer = function (id, title) {
        var r = new ActionReference();
        r.putIdentifier(s2t('layer'), id);
        (d = new ActionDescriptor()).putReference(s2t('null'), r);
        (d1 = new ActionDescriptor()).putString(s2t('name'), title);
        d.putObject(s2t('to'), s2t('layer'), d1);
        executeAction(s2t('set'), d, DialogModes.NO);
    }
    function getDescValue(d, p) {
        switch (d.getType(p)) {
            case DescValueType.OBJECTTYPE: return { type: t2s(d.getObjectType(p)), value: d.getObjectValue(p) };
            case DescValueType.LISTTYPE: return d.getList(p);
            case DescValueType.REFERENCETYPE: return d.getReference(p);
            case DescValueType.BOOLEANTYPE: return d.getBoolean(p);
            case DescValueType.STRINGTYPE: return d.getString(p);
            case DescValueType.INTEGERTYPE: return d.getInteger(p);
            case DescValueType.LARGEINTEGERTYPE: return d.getLargeInteger(p);
            case DescValueType.DOUBLETYPE: return d.getDouble(p);
            case DescValueType.ALIASTYPE: return d.getPath(p);
            case DescValueType.CLASSTYPE: return d.getClass(p);
            case DescValueType.UNITDOUBLE: return (d.getUnitDoubleValue(p));
            case DescValueType.ENUMERATEDTYPE: return { type: t2s(d.getEnumerationType(p)), value: t2s(d.getEnumerationValue(p)) };
            default: break;
        };
    }
}