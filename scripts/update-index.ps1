param(
    [string]$SemesterDir = "大二上"
)

$ErrorActionPreference = "Stop"

if (-not (Test-Path -Path $SemesterDir -PathType Container)) {
    throw "目录不存在: $SemesterDir"
}

$semesterName = Split-Path -Leaf $SemesterDir
$categoryDirs = Get-ChildItem -Path $SemesterDir -Directory | Sort-Object Name

$lines = New-Object System.Collections.Generic.List[string]
$lines.Add("# ${semesterName}资料索引")
$lines.Add("")
$lines.Add('> 该文件由 `scripts/update-index.ps1` 自动生成。')
$lines.Add("")

foreach ($category in $categoryDirs) {
    $lines.Add("## $($category.Name)")
    $lines.Add("")

    $courseDirs = Get-ChildItem -Path $category.FullName -Directory | Sort-Object Name
    if ($courseDirs.Count -eq 0) {
        $lines.Add("- （暂无课程）")
        $lines.Add("")
        continue
    }

    foreach ($course in $courseDirs) {
        $lines.Add("- [$($course.Name)](./$($category.Name)/$($course.Name))")
    }
    $lines.Add("")
}

$lines.Add("## 使用方式")
$lines.Add("")
$lines.Add("在仓库根目录执行：")
$lines.Add("")
$lines.Add('```powershell')
$lines.Add("powershell -ExecutionPolicy Bypass -File ./scripts/update-index.ps1")
$lines.Add('```')
$lines.Add("")

$content = ($lines -join [Environment]::NewLine) + [Environment]::NewLine
# Use UTF-8 with BOM to avoid mojibake when opened by tools that auto-detect encoding via BOM.
$utf8Bom = New-Object System.Text.UTF8Encoding($true)
$outputPath = Join-Path $SemesterDir "README.md"
[System.IO.File]::WriteAllText($outputPath, $content, $utf8Bom)

Write-Output "已更新: $outputPath"
