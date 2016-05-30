 var config = {
        id: 1039,
        profileId: 'user-profile-id',
        platformId: 39,
        api: 'http://specials.lookatme.ru/amberdata/tags',
    }

    if (window.location.href.split('/').length > 5) { // check if not main page
        getTags();
    }

    function getTags() {
        var url = getUrl();
        $.get(config.api, { url: url }, function(data) {
            if (data.length !== 0) {
                sendAmberdata(data);
            } else {
                console.info('No tags for this url');
            }
        })
        .error(function(e) {
            console.log(e);
        });
    };

    function getUrl() {
        var seg = window.location.href.split('/');
        var url = seg[0]+'/'+seg[1]+'/'+seg[2]+'/'+seg[3]+'/'+seg[4]+'/'+seg[5]; // get first segments
        return url;
    }

    function sendAmberdata(tags) {
        window.adcm.configure({
            id: config.id,
            profileId: config.profileId,
            platformId: config.platformId,
            tags: tags
        }, function () {
            console.log('amberdata tags: ',tags);
            window.adcm.call();
        });
    }