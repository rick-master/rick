import dropbox
dropbox_access_token= "sl.BJjksdNvaxljEiV2JEs2P33unu7Va5N2CmH-yJvSJK8zDA49e7YdjoRmBZKKs6gLgVOQ1ap67i3ltbozBPXxKUL6vKu1jmMnW1K4AmcmNH8L_-MHDRs2dntjVzRuWFFMKi15XsQDpJtD"
dropbox_path= "/cldwoking.txt"
computer_path=r"E:\cldwoking.txt"
client = dropbox.Dropbox(dropbox_access_token)
print("[SUCCESS] dropbox account linked")
client.files_upload(open(computer_path, "rb").read(), dropbox_path)
print("[UPLOADED] {}".format(computer_path))

metadata, f = client.files_download('/cldwoking.txt')
out = open("cldwoking_downloaded.txt", 'wb')
out.write(f.content)
out.close()
print("[SUCCESS] downloaded")

