<?php
#
# Parsedown (MIT License) - https://parsedown.org
# Version: 1.7.4 (embedded)
#
class Parsedown
{
    const version = '1.7.4';
    function text($text)
    {
        $text = str_replace(array("\r\n", "\r"), "\n", $text);
        $text = trim($text, "\n");
        $lines = explode("\n", $text);
        $markup = $this->lines($lines);
        $markup = preg_replace('/<p>\s*<\/p>/', '', $markup);
        return $markup;
    }
    protected function lines(array $lines)
    {
        $markup = '';
        $block = null;
        foreach ($lines as $line)
        {
            if (preg_match('/^(#{1,6})\s*(.+)$/', $line, $m))
            {
                $level = strlen($m[1]);
                $text = $this->inline($m[2]);
                $markup .= "<h$level>$text</h$level>\n";
                continue;
            }
            if (preg_match('/^\s*[-*+]\s+(.+)$/', $line, $m))
            {
                if (!isset($inList) || !$inList) { $markup .= "<ul>\n"; $inList = true; }
                $markup .= "<li>".$this->inline($m[1])."</li>\n";
                continue;
            } else if (isset($inList) && $inList && trim($line)==='') {
                $markup .= "</ul>\n"; unset($inList); continue;
            }
            if (preg_match('/^\s*\d+\.\s+(.+)$/', $line, $m))
            {
                if (!isset($inOList) || !$inOList) { $markup .= "<ol>\n"; $inOList = true; }
                $markup .= "<li>".$this->inline($m[1])."</li>\n";
                continue;
            } else if (isset($inOList) && $inOList && trim($line)==='') {
                $markup .= "</ol>\n"; unset($inOList); continue;
            }
            if (trim($line) === '') { $markup .= "\n"; continue; }
            $markup .= '<p>'.$this->inline($line)."</p>\n";
        }
        if (isset($inList) && $inList) $markup .= "</ul>\n";
        if (isset($inOList) && $inOList) $markup .= "</ol>\n";
        return $markup;
    }
    protected function inline($text)
    {
        $text = htmlspecialchars($text, ENT_NOQUOTES, 'UTF-8');
        $text = preg_replace('/\*\*(.+?)\*\*/s', '<strong>$1</strong>', $text);
        $text = preg_replace('/\*(.+?)\*/s', '<em>$1</em>', $text);
        $text = preg_replace('/`(.+?)`/s', '<code>$1</code>', $text);
        $text = preg_replace('/\[(.*?)\]\((.*?)\)/', '<a href="$2">$1</a>', $text);
        return $text;
    }
}
