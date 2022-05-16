module.exports = {
    chainWebpack: config => {
        // prefetch 삭제 (default는 prefetch 사용하도록 설정되어있으므로 사용하지 않으려면 해당 파일 추가 후 설정 추가 필요
        // vue application 개발 시 기본적으로 끄는 것을 권장
        config.plugins.delete('prefetch');
    }
}